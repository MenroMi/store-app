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
  const [hide, setHide] = useState(false); // for fun
  const [mobile, setMobile] = useState(false); // for fun
  const theme = useTheme();
  const queryUpMd = useMediaQuery(theme.breakpoints.up('md'));

  const testFunc = (e: any): void => {
    if (e.target?.dataset?.overlay) {
      setHide(true);
    }
  };

  useEffect(() => {
    setMobile(true);

    return () => setMobile(false);
  }, []);

  return (
    <>
      <div style={{ border: '5px solid black', height: '120px' }}></div>
      <Box
        maxWidth="1920px"
        m="0 auto"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        sx={{ p: { md: '0 60px' } }}
      >
        <Box
          onClick={(e) => testFunc(e)}
          sx={{
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '9',
            width: '100%',
            height: '100%',
            display: `${!hide && mobile && !queryUpMd ? 'block' : 'none'}`,
            backgroundColor: `${!hide && mobile && !queryUpMd && 'rgba(0,0,0, 0.5)'}`,
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
