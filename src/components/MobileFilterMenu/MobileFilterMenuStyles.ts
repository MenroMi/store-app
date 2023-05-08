import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const CustomOverlay = styled(Box)(() => ({
  position: 'fixed',
  zIndex: '1000',
  overflowY: 'auto',
  bottom: '0',
  width: '100%',
  height: '50%',
  backgroundColor: 'rgba(255,255,255, 0.95)',
}));
