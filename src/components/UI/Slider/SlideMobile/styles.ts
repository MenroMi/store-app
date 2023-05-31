import { styled } from '@mui/material';
import theme from '@/utils/mui/theme';

export const MobileSliderWrapper = styled('div')(() => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  border: '1px solid rgba(0,0,0,0.2)',
  borderRadius: '5px',
  alignItems: 'center',
  marginTop: '10px',
  padding: '10px',
}));
