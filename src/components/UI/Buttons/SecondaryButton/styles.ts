import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomSecondaryButton = styled(Button)(() => ({
  backgroundColor: 'transparent',
  border: '1px solid',
  width: '100%',
  height: '40px',
  borderRadius: '5px',
  fontFamily: '"Work Sans", sans-serif',
  fontWeight: 500,
  textTransform: 'none',
  cursor: 'pointer',
  maxWidth: '436px',
  margin: '0 auto',
}));
