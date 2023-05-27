import theme from '@/utils/mui/theme';
import { TextField, styled } from '@mui/material';

export const HeaderSearchLayout = styled('div')(() => ({
  position: 'fixed',
  width: '100%',
  height: '100vh',
  zIndex: '100000',
  top: 0,
  left: 0,
  background: 'rgba(243, 243, 243, 0.9)',
}));

export const HeaderSearchContainer = styled('div')(() => ({
  maxHeight: '500px',
  height: '100%',

  width: '100%',
  background: '#fff',
  padding: '45px 60px 20px 40px',

  [theme.breakpoints.down('sm')]: {
    padding: '26px 20px 20px',
    minHeight: '360px',
  },
}));
export const HeaderSearchDiv = styled('div')(() => ({
  position: 'relative',
  width: '100%',
  height: '79px',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '40px',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    height: '25px',
    gap: '20px',
  },
}));

export const HeaderSearch = styled(TextField)(() => ({
  '& fieldset': {
    borderRadius: '42px',
  },
  '& .MuiInputBase-input': {
    fontSize: '25px',
    fontWeight: '400',
    lineHeight: '29px',

    [theme.breakpoints.down('sm')]: {
      fontSize: '10px',
      lineHeight: '12px',
    },
  },
  height: '79px',
  width: '100%',
  maxWidth: '1070px',
  [theme.breakpoints.down('sm')]: {
    height: '25px',
  },
}));

export const HeaderDiv = styled('div')(() => ({
  margin: '40px 67px 20px 80px',
  [theme.breakpoints.down('sm')]: {
    margin: '20px 0',
  },
}));
