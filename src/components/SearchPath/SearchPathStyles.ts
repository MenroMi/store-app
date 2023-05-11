import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const CustomFlexWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '320px',
}));
