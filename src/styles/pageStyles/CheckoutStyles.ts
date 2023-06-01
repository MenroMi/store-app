import { Grid, Button, styled, Box, keyframes } from '@mui/material';

const spinner = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const CheckoutMessage = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignContent: 'center',
  textAlign: 'center',
  gap: '20px',
  zIndex: 1,
  color: theme.palette.text.iconDark,
  [theme.breakpoints.between('xs', 'sm')]: {
    width: '80%',
  },
}));

export const ContentContainer = styled(Grid)(({ theme }) => ({
  paddingTop: '200px',
  paddingBottom: '40px',
  [theme.breakpoints.between('xs', 'sm')]: {
    height: '100%',
  },
}));

export const CustomButton = styled(Button)({
  margin: '10px auto',
  padding: 5,
});
