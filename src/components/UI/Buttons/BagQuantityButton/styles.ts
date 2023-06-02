import { Fab } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomButtonWrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  maxHeight: '28px',
  maxWidth: '215px',
}));

export const CustomFabButton = styled(Fab)(() => ({
  minHeight: '20px',
  maxHeight: '28px',
  position: 'relative',
  marginLeft: '5px',
  marginRight: '5px',
  backgroundColor: '#FFFFFF',
  color: '#6E7278',
  zIndex: '1',
  '&:hover': {
    backgroundColor: '#FE645E',
    color: '#5C5C5C',
  },
}));
