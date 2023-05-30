import theme from '@/utils/mui/theme';
import { Button, TextField, styled } from '@mui/material';

export const HeaderSearchLayout = styled('div')(() => ({
  position: 'fixed',
  width: '100%',
  height: '100%',
  zIndex: '100000',
  top: 0,
  left: 0,
  background: 'rgba(243, 243, 243, 0.9)',
}));

export const HeaderSearchContainer = styled('div')(() => ({
  minHeight: '200px',
  width: '100%',
  background: '#fff',
  padding: '45px 60px 20px 40px',

  [theme.breakpoints.down('sm')]: {
    padding: '26px 20px 20px',
  },

  [theme.breakpoints.down(400)]: {
    padding: '26px 20px 20px',
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
  margin: '40px 30px 20px 25px',

  [theme.breakpoints.down('lg')]: {
    margin: '40px 0 20px 0',
  },

  [theme.breakpoints.down('sm')]: {
    margin: '20px 0',
  },
}));

export const ButtonSeeAll = styled(Button)({
  width: '100%',
  border: '2px solid rgba(0,0,0,0.2)',
  fontSize: '24px',
  color: 'rgba(0,0,0,0.5)',
  transition: '0.3s all',
  '&:hover': {
    border: '2px solid  rgba(254, 100, 94, 1)',
    backgroundColor: theme?.palette?.primary?.main,
    color: theme?.palette?.primary?.contrastText,
  },
});
