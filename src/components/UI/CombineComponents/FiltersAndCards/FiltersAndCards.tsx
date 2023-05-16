// mui
import { Box, Skeleton } from '@mui/material';

// components
import CardList from '../../Cards/CardList/CardList';
import FiltersList from '../../Filters/FiltersList/FiltersList';

// styled component
import { CustomAside } from './FiltersAndCardsStyles';

// interface
import { IFiltersAndCardsProps } from '@/types/filterListTypes';

// FUNCTIONAL COMPONENT
const FiltersAndCards: React.FC<IFiltersAndCardsProps> = ({
  hide,
  isFetched,
  isError,
  isLoading,
  error,
  filters,
}): JSX.Element => {
  if (isFetched) {
    console.log(filters);
  }

  if (isError) {
    return <h2>{(error as Error).message}</h2>;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {!hide ? (
        <CustomAside>
          {isFetched && !isLoading ? (
            <FiltersList filters={filters} />
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
          maxWidth: `${hide ? '1920px' : '1580px'}`,
          width: '100%',
          height: '100%',
        }}
      >
        <CardList hide={hide} />
      </Box>
    </Box>
  );
};

export default FiltersAndCards;
