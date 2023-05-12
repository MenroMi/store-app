// mui
import { Box } from '@mui/material';
import { useTheme, Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// components
import SearchPath from '../../Search/SearchPath/SearchPath';
import SearchResult from '../../Search/SearchResult/SearchResult';

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
  const theme = useTheme<Theme>();
  const queryUpMd = useMediaQuery<unknown>(theme.breakpoints.up('md'));
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
      {!queryUpMd || hide ? null : <SearchPath hide={hide} />}
      <SearchResult hide={hide} onHide={onHide} />
    </Box>
  );
};

export default PathAndSearchResult;
