// basic
import { useContext, useEffect, useState } from 'react';

// mui
import { Box, Button } from '@mui/material';
import { useTheme, Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// context Provider
import { IFiltersContext } from '@/contexts/filtersContext';
import { FiltersContext } from '@/contexts/filtersContext';

// components
import FiltersAndCards from '@/components/UI/CombineComponents/FiltersAndCards/FiltersAndCards';
import MobileFilterMenu from '@/components/UI/Filters/MobileFilterMenu/MobileFilterMenu';
import PathAndSearchResult from '@/components/UI/CombineComponents/PathAndSearchResult/PathAndSearchResult';
import Layout from '@/components/Layout/MainLayout';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { getFilteredData } from '@/services/searchApi';
import makeArray from '@/utils/filters/makeRouterQueryArray';
import Notification from '@/components/UI/Notification/Notificaton';

// FUNCTIONAL COMPONENT
export default function SearchResultPage(): JSX.Element {
  const [mobileVer, setMobileVer] = useState<boolean>(false);
  const theme = useTheme<Theme>();
  const queryUpMd = useMediaQuery<unknown>(theme.breakpoints.up('md'));
  const context = useContext(FiltersContext);
  const { hide, onHideFilters } = context as IFiltersContext;

  useEffect(() => {
    setMobileVer(true);

    return () => setMobileVer(false);
  }, []);

  return (
    <Layout title="Search page">
      <Box
        maxWidth="1920px"
        m="0 auto"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <PathAndSearchResult />
      </Box>

      <FiltersAndCards />
      <Box
        onClick={(e) => onHideFilters(e)}
        sx={{
          position: 'fixed',
          top: '0',
          left: '0',
          zIndex: '9',
          width: '100%',
          height: '100%',
          display: `${!hide && mobileVer && !queryUpMd ? 'block' : 'none'}`,
          backgroundColor: `${!hide && mobileVer && !queryUpMd && 'rgba(243, 243, 243, 0.9)'}`,
        }}
        data-overlay="overlay"
      />
      {!queryUpMd && !hide && <MobileFilterMenu />}

      <Notification />
    </Layout>
  );
}

export async function getServerSideProps(context: { query: { [x: string]: string[] | string } }) {
  const queryClient = new QueryClient();
  let query = makeArray(context?.query);

  await queryClient.prefetchQuery({
    queryKey: ['filteredData', query],
    queryFn: () => getFilteredData(query),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
