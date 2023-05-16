import theme from '@/utils/mui/theme';
import { styled } from '@mui/material';

export const CustomForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '48px',
  maxWidth: '436px',

  [theme.breakpoints.down('md')]: {
    marginTop: '24px',
  },
});
