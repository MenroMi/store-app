// mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography } from '@mui/material';

// styled component
import { CustomFlexWrapper } from './SearchPathStyles';

// FUNCTIONAL COMPONENT
export default function SearchPath() {
  const theme = useTheme();
  const queryUpMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <CustomFlexWrapper mt={`${!queryUpMd && '8px'}`}>
      <Typography
        variant="body1"
        sx={{
          fontWeight: '300',
          pl: `${queryUpMd && '40px'}`,
          lineHeight: '18px',
        }}
      >
        Shoes/Air Force 1
      </Typography>
      <Typography
        variant="h4"
        sx={{
          marginTop: `${queryUpMd && '8px'}`,
          borderBottom: `${queryUpMd && '1px solid #eaecf0'}`,
          padding: `${queryUpMd && '0 0 16px 39px'}`,
        }}
      >
        Air Force 1 (137)
      </Typography>
    </CustomFlexWrapper>
  );
}
