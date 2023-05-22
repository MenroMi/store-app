// basic
import { useContext, useEffect, useMemo, useState } from 'react';

// mui
import { Box } from '@mui/material';
import { useTheme, Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// context Provider
import FiltersProvider, { IFiltersContext } from '@/context/filtersContext';
import { FiltersContext } from '@/context/filtersContext';

// libs
import qs from 'qs';

// components
import FiltersAndCards from '@/components/UI/CombineComponents/FiltersAndCards/FiltersAndCards';
import MobileFilterMenu from '@/components/UI/Filters/MobileFilterMenu/MobileFilterMenu';
import PathAndSearchResult from '@/components/UI/CombineComponents/PathAndSearchResult/PathAndSearchResult';
import Layout from '@/components/Layout/MainLayout';
import { DehydratedState, QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { getFilteredData } from '@/services/searchApi';

// interface
interface ISearchResultPageProps {
  query: any;
  dehydratedState: DehydratedState;
}

// FUNCTIONAL COMPONENT
export default function SearchResultPage({
  query,
  dehydratedState,
}: ISearchResultPageProps): JSX.Element {
  const [mobileVer, setMobileVer] = useState<boolean>(false);
  const theme = useTheme<Theme>();
  const queryUpMd = useMediaQuery<unknown>(theme.breakpoints.up('md'));
  const context = useContext(FiltersContext);
  const { hide, onHideFilters } = context as IFiltersContext;

  const contextFilteredData = useQuery({
    queryKey: ['filteredData', query],
    queryFn: () => getFilteredData(query),
    refetchOnWindowFocus: false,
  });

  // now is unusable
  const memoizedData = useMemo(() => contextFilteredData?.data, [contextFilteredData?.data]);

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
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const query = qs.stringify(context?.query);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['filteredData'], () => getFilteredData(query));

  return {
    props: {
      query: context?.query,
      dehydratedState: dehydrate(queryClient),
    },
  };
}
