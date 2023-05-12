// basic
import { useEffect, useState } from 'react';

// mui
import { Box } from '@mui/material';
import { useTheme, Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// components
import FiltersAndCards from '@/components/UI/CombineComponents/FiltersAndCards/FiltersAndCards';
import MobileFilterMenu from '@/components/UI/Filters/MobileFilterMenu/MobileFilterMenu';
import PathAndSearchResult from '@/components/UI/CombineComponents/PathAndSearchResult/PathAndSearchResult';
import Layout from '@/components/Layout/MainLayout';

// FUNCTIONAL COMPONENT
export default function SearchResultPage(): JSX.Element {
  const [hide, setHide] = useState<boolean>(false);
  const [mobileVer, setMobileVer] = useState<boolean>(false);
  const theme = useTheme<Theme>();
  const queryUpMd = useMediaQuery<unknown>(theme.breakpoints.up('md'));

  const onHideFilters = (e: any): void => {
    if (e.target?.dataset?.overlay) {
      setHide(true);
    }
    return;
  };

  useEffect(() => {
    setMobileVer(true);

    return () => setMobileVer(false);
  }, []);

  return (
    <Layout>
      <>
        <Box
          maxWidth="1920px"
          m="0 auto"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          sx={{ p: { md: `${hide ? '0 60px' : '0'}` } }}
        >
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
          <PathAndSearchResult hide={hide} onHide={(): void => setHide(!hide)} />
          <FiltersAndCards hide={hide} />
          {!queryUpMd && !hide && (
            <MobileFilterMenu hide={hide} onHide={(): void => setHide(!hide)} />
          )}
        </Box>
      </>
    </Layout>
  );
}
