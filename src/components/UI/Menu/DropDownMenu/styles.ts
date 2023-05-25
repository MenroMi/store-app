import { styled, IconButton, Button, Menu } from '@mui/material';
import theme from '@/utils/mui/theme';

export const CustomDotsBtn = styled(Button)({
  position: 'absolute',
  top: '20px',
  right: '24px',
  cursor: 'pointer',
  backgroundColor: 'white',
  zIndex: '1100',
  [theme.breakpoints.down('sm')]: {
    top: '10px',
    right: '14px',
  },

  '&.MuiButtonBase-root': {
    minWidth: '20px',
    minHeight: '20px',
    padding: '3px 5px',
  },
  '&:hover': {
    backgroundColor: theme?.palette?.primary?.main,
  },

  '&:active': {
    backgroundColor: '#c44b47',
  },
});

export const CustomDropDownMenu = styled(Menu)({
  '& .MuiMenu-list': {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(10px)',
  },
  '& .MuiPaper-root': {
    backgroundColor: 'transparent',
    width: '100%',
    maxWidth: '150px',
  },
  '& .MuiMenuItem-root': {
    transition: '200ms all',
    fontSize: '1rem',
    color: 'black',
    '&:hover': {
      backgroundColor: 'rgba(254, 100, 94, 0.5)',
      color: theme?.palette?.primary?.contrastText,
    },
  },
});
