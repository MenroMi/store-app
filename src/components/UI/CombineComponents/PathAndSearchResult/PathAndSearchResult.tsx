// basic
import React, { useContext } from 'react';

// mui
import { Box } from '@mui/material';
import { useTheme, Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// context
import { FiltersContext } from '@/contexts/filtersContext';

// components
import SearchPath from '../../Search/SearchPath/SearchPath';
import SearchResult from '../../Search/SearchResult/SearchResult';

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
