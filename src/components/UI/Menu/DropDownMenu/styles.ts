import { styled, IconButton, Menu } from '@mui/material';
import theme from '@/utils/mui/theme';

export const CustomDotsBtn = styled(IconButton)({
  position: 'absolute',
  top: '20px',
  right: '16px',
  cursor: 'pointer',
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
