// basic
import { MouseEventHandler, useContext, useEffect, useState } from 'react';

// mui
import { Box } from '@mui/material';
import { useTheme, Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// rq
import { QueryClient, dehydrate } from '@tanstack/react-query';

// services
import { getFilteredData } from '@/services/searchApi';

// utils
import makeArray from '@/utils/filters/makeRouterQueryArray';

// context Provider
import { IFiltersContext } from '@/providers/filters';
import { FiltersContext } from '@/providers/filters';

// components
import FiltersAndCards from '@/components/UI/CombineComponents/FiltersAndCards/FiltersAndCards';
import MobileFilterMenu from '@/components/UI/Filters/MobileFilterMenu/MobileFilterMenu';
import PathAndSearchResult from '@/components/UI/CombineComponents/PathAndSearchResult/PathAndSearchResult';
import Layout from '@/components/Layout/MainLayout';
import Notification from '@/components/UI/Notification/Notificaton';

// styles
import { CustomSearchOverlay } from '@/styles/pageStyles/SearchStyles';

// FUNCTIONAL COMPONENT
export default function SearchResultPage(): JSX.Element {
  const theme = useTheme<Theme>();
  const queryUpMd = useMediaQuery<unknown>(theme.breakpoints.up('md'));

  const [mobileVer, setMobileVer] = useState<boolean>(false);
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
      <CustomSearchOverlay
        onClick={onHideFilters}
        sx={{
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
