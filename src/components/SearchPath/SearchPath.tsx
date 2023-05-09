// mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography } from '@mui/material';

// styled component
import { CustomFlexWrapper } from './SearchPathStyles';

// interface
interface ISearchPathProps {
  hide: boolean;
}

// FUNCTIONAL COMPONENT
const SearchPath: React.FC<ISearchPathProps> = ({ hide }): JSX.Element => {
  const theme = useTheme();
  const queryUpMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <CustomFlexWrapper mt={`${queryUpMd && hide ? '8px' : !queryUpMd ? '8px' : '0'}`}>
      <Typography
        variant="body1"
        sx={{
          fontWeight: '300',
          lineHeight: '18px',
          ml: `${queryUpMd && hide ? '0' : !queryUpMd ? '0' : '40px'}`,
        }}
      >
        Shoes/Air Force 1
      </Typography>
      <Typography
        variant="h4"
        sx={{
          marginTop: `${queryUpMd && '8px'}`,
          borderBottom: `${queryUpMd && !hide && '1px solid #eaecf0'}`,
          pl: `${queryUpMd && hide ? '0' : !queryUpMd ? '0' : '40px'}`,
          pb: `${!hide && '16px'}`,
        }}
      >
        Air Force 1 (137)
      </Typography>
    </CustomFlexWrapper>
  );
};

export default SearchPath;
