// basic
import React, { useContext } from 'react';

// mui
import { Box, Button, Theme, useMediaQuery, useTheme } from '@mui/material';

// components
import CardList from '@/components/UI/Cards/CardList/CardList';
import FiltersList from '@/components/UI/Filters/FiltersList/FiltersList';
import PaginationMui from '@/components/UI/Pagination/Pagination';

// context
import { FiltersContext } from '@/contexts/filtersContext';

// styled component
import { CustomAside } from './styles';

// FUNCTIONAL COMPONENT
const FiltersAndCards: React.FC = (): JSX.Element => {
  const context = useContext(FiltersContext);
  const theme = useTheme<Theme>();
  const queryUpMd = useMediaQuery<unknown>(theme.breakpoints.up('md'));

  if (context?.isError) {
    return <h2>{(context?.error as Error).message}</h2>;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {!context?.hide ? (
        <CustomAside>
          <FiltersList />
        </CustomAside>
      ) : null}

      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          rowGap: '16px',
          maxWidth: `${context?.hide ? '1920px' : '1580px'}`,
          p: `${queryUpMd && context?.hide ? '0 40px' : !queryUpMd ? '0' : '0 40px 0 0'}`,
          width: '100%',
          height: '100%',
        }}
      >
        <CardList />
        <PaginationMui />
      </Box>
    </Box>
  );
};

export default FiltersAndCards;
