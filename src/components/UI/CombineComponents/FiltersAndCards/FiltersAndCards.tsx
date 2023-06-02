// basic
import React, { useContext } from 'react';

// mui
import { Box, Theme, useMediaQuery, useTheme } from '@mui/material';

// components
import CardList from '@/components/UI/Cards/CardList/CardList';
import FiltersList from '@/components/UI/Filters/FiltersList/FiltersList';
import PaginationMui from '@/components/UI/Pagination/Pagination';

// context
import { FiltersContext } from '@/providers/filters';

// styled component
import { CustomAside, CustomMainFilters } from './styles';

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

      <CustomMainFilters
        component="main"
        sx={{
          maxWidth: `${context?.hide ? '1920px' : '1580px'}`,
          p: `${queryUpMd && context?.hide ? '0 40px' : !queryUpMd ? '0' : '0 40px 0 0'}`,
          width: '100%',
          height: '100%',
        }}
      >
        <CardList />
        <PaginationMui />
      </CustomMainFilters>
    </Box>
  );
};

export default FiltersAndCards;
