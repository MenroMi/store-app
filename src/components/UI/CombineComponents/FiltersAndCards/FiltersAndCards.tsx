// mui
import { Box, Skeleton } from '@mui/material';
import React, { useContext } from 'react';

// components
import CardList from '../../Cards/CardList/CardList';
import FiltersList from '../../Filters/FiltersList/FiltersList';

// context
import { FiltersContext } from '@/context/filtersContext';

// styled component
import { CustomAside } from './FiltersAndCardsStyles';

// interface

// FUNCTIONAL COMPONENT
const FiltersAndCards: React.FC = (): JSX.Element => {
  const context = useContext(FiltersContext);

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
          {context?.isFetched && !context?.isLoading ? (
            <FiltersList />
          ) : (
            [...new Array(5).fill(null)].map((_, id) => {
              return (
                <Skeleton
                  key={id}
                  width={320}
                  height={42}
                  variant="rectangular"
                  sx={{ mt: '20px', borderRadius: '8px' }}
                />
              );
            })
          )}
        </CustomAside>
      ) : null}

      <Box
        component="main"
        sx={{
          maxWidth: `${context?.hide ? '1920px' : '1580px'}`,
          width: '100%',
          height: '100%',
        }}
      >
        <CardList hide={context?.hide} />
      </Box>
    </Box>
  );
};

export default FiltersAndCards;
