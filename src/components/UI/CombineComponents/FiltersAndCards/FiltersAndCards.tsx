// mui
import { Box } from '@mui/material';

// components
import CardList from '../../Cards/CardList/CardList';
import FiltersList from '../../Filters/FiltersList/FiltersList';

// styled component
import { CustomAside } from './FiltersAndCardsStyles';

// interface
interface IFiltersAndCardsProps {
  hide: boolean;
}

// FUNCTIONAL COMPONENT
const FiltersAndCards: React.FC<IFiltersAndCardsProps> = ({ hide }): JSX.Element => {
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
          <FiltersList />
        </CustomAside>
      ) : null}
      <Box
        component="main"
        sx={{
          maxWidth: `${hide ? '1920px' : '1580px'}`,
        }}
      >
        <CardList hide={hide} />
      </Box>
    </Box>
  );
};

export default FiltersAndCards;
