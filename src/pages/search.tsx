// basic
import { useEffect, useState } from 'react';

// mui
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// components
import FiltersAndCards from '@/components/FiltersAndCards/FiltersAndCards';
import MobileFilterMenu from '../components/MobileFilterMenu/MobileFilterMenu';
import PathAndSearchResult from '@/components/PathAndSearchResult/PathAndSearchResult';

// FUNCTIONAL COMPONENT
export default function SearchResultPage(): JSX.Element {
  const [hide, setHide] = useState(false);
  const [mobileVer, setMobileVer] = useState(false);
  const theme = useTheme();
  const queryUpMd = useMediaQuery(theme.breakpoints.up('md'));

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
    <>
      <Box
        maxWidth="1920px"
        m="0 auto"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        sx={{ p: { md: `${hide ? '0 60px' : '0 60px 0 0'}` } }}
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
            backgroundColor: `${!hide && mobileVer && !queryUpMd && 'rgba(0,0,0, 0.5)'}`,
          }}
          data-overlay="overlay"
        />
        <PathAndSearchResult hide={hide} onHide={(): void => setHide(!hide)} />
        <FiltersAndCards hide={hide} />

        {!hide && !queryUpMd && <MobileFilterMenu />}
      </Box>
    </>
  );
}