import { styled } from '@mui/material/styles';
import theme from '@/utils/mui/theme';

export const CustomCircleNotification = styled('div')({
  position: 'relative',
  marginLeft: '9px',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: theme?.palette?.primary?.main,
  color: theme?.palette?.primary?.contrastText,
});
