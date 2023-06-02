// basic
import React, { useContext } from 'react';

// mui
import { Box, useTheme, Theme, useMediaQuery } from '@mui/material';

// context
import { FiltersContext } from '@/providers/filters';

// components
import SearchPath from '@/components/UI/Search/SearchPath/SearchPath';
import SearchResult from '@/components/UI/Search/SearchResult/SearchResult';

// FUNCTIONAL COMPONENT
const PathAndSearchResult: React.FC = (): JSX.Element => {
  const theme = useTheme<Theme>();
  const queryUpMd = useMediaQuery<unknown>(theme.breakpoints.up('md'));
  const context = useContext(FiltersContext);

  return (
    <Box
      display="flex"
      mt="13px"
      sx={{
        gap: { lg: `${!context?.hide ? '59px' : '52px'}`, md: '16px' },
        position: 'relative',
        zIndex: 1,
      }}
    >
      {!queryUpMd || context?.hide ? null : <SearchPath />}

      <SearchResult />
    </Box>
  );
};

export default PathAndSearchResult;
