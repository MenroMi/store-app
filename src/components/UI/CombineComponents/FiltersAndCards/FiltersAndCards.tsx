// mui
import { Box, Pagination, Skeleton, Theme, useMediaQuery, useTheme } from '@mui/material';
import React, { useContext } from 'react';

// components
import CardList from '../../Cards/CardList/CardList';
import FiltersList from '../../Filters/FiltersList/FiltersList';

// context
import { FiltersContext } from '@/contexts/filtersContext';
import { ProductsContext } from '@/contexts/productsContext';

// styled component
import { CustomAside } from './FiltersAndCardsStyles';
import { useRouter } from 'next/router';

// interface

// FUNCTIONAL COMPONENT
const FiltersAndCards: React.FC = (): JSX.Element => {
  const context = useContext(FiltersContext);
  const contextProducts = useContext(ProductsContext);
  const router = useRouter();
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
        <Pagination
          showFirstButton
          showLastButton
          page={contextProducts?.page}
          onChange={contextProducts?.onChangePage}
          count={contextProducts?.maxPage}
          shape="rounded"
          color="primary"
          size="large"
        />
      </Box>
    </Box>
  );
};

export default FiltersAndCards;
