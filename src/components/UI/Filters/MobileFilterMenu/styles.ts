import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const CustomOverlay = styled(Box)({
  position: 'fixed',
  zIndex: '10001',
  overflowY: 'auto',
  bottom: '0',
  right: '0',
  width: '75%',
  height: '100%',
  backgroundColor: 'rgba(255,255,255, 0.95)',
  padding: '0',
});
