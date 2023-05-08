// mui
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// components
import FiltersList from '../FiltersList/FiltersList';
import SearchPath from '../SearchPath/SearchPath';

// interface
interface ISideBarFilters {
  hide: boolean;
}

const SideBarFilters: React.FC<ISideBarFilters> = ({
  hide,
}: ISideBarFilters): null | JSX.Element => {
  const theme = useTheme();

  return !hide ? (
    <Box
      component="aside"
      sx={{
        display: { xs: 'none', md: 'block' },
        width: { md: '280px', lg: '380px' },
        height: '100%',
        margin: '44px 60px 0 0',
        position: 'sticky',
        top: '20px',
      }}
    >
      <SearchPath />
      <Box
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
        <FiltersList />
      </Box>
    </Box>
  ) : null;
};

export default SideBarFilters;
