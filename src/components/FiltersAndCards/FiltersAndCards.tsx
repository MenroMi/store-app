// mui
import { Box } from '@mui/material';

// components
import CardList from '../CardList/CardList';
import FiltersList from '../FiltersList/FiltersList';

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
          padding: '0',
        }}
      >
        <CardList hide={hide} />
      </Box>
    </Box>
  );
};

export default FiltersAndCards;

/***
 * 
 *           { <Box
            sx={{
              maxHeight: { xl: '1000px', lg: '550px', md: '350px' },
              overflowY: 'scroll',
              overflowX: 'hidden',
              '&::-webkit-scrollbar': {
                width: '3px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: theme?.palette?.primary?.main,
                backgroundClip: 'content-box',
                borderRadius: '100vw',
                opacity: '0.1',
              },
            }}
          >
          </Box> }
 * 
 * 
 */
