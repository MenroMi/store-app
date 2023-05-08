// mui
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// components
import SearchPath from '../SearchPath/SearchPath';
import SearchResult from '../SearchResult/SearchResult';

// interface
interface IPathAndSearchResultProps {
  hide: boolean;
  onHide: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// FUNCTIONAL COMPONENT
const PathAndSearchResult: React.FC<IPathAndSearchResultProps> = ({
  onHide,
  hide,
}): JSX.Element => {
  const theme = useTheme();
  const queryUpMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box
      display="flex"
      mt="44px"
      sx={{
        gap: { lg: `${!hide ? '59px' : '52px'}`, md: '16px' },
        position: 'relative',
        zIndex: 1,
      }}
    >
      {!queryUpMd ? null : <SearchPath />}
      <SearchResult hide={hide} onHide={onHide} />
    </Box>
  );
};

export default PathAndSearchResult;
