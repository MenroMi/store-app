import SideBarFilters from '@/components/SideBarFilters/SideBarFilters';
import SearchResultWin from '@/components/SearchResultWin/SearchResultWin';
import { Box } from '@mui/material';
import { useState } from 'react';

export default function SearchResultPage(): JSX.Element {
  const [hide, setHide] = useState(false); // for fun

  return (
    <>
      <div style={{ border: '5px solid black', height: '120px' }}></div>
      <Box
        maxWidth="1920px"
        m="0 auto"
        display="flex"
        justifyContent="center"
        sx={{ p: { md: `${hide ? '0 60px' : '0 60px 0 0'}` } }}
      >
        <SideBarFilters hide={hide} />
        <SearchResultWin hide={hide} onHide={(): void => setHide(!hide)} />
      </Box>
    </>
  );
}
