import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

export const CustomFlexWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '320px',
});

export const CustomSearchPathButton = styled(Button)(({ theme }) => ({
  fontSize: '15px',
  fontWeight: '300',
  height: '20px',
  padding: '0',
  minWidth: 0,
  color: theme?.palette?.text?.primary,
  opacity: '0.7',

  '&:hover': {
    backgroudColor: 'none',
    textDecoration: 'underline',
  },

  '&:active': {
    color: theme?.palette?.primary?.main,
    opacity: 1,
    backgroudColor: 'none',
  },

  [theme.breakpoints.between('xs', 'sm')]: {
    fontSize: 20,
  },
}));
