import { styled } from '@mui/material';
import theme from '@/utils/mui/theme';

export const CustomSearchSlideWrapper = styled('div')({
  position: 'relative',
  height: '100%',
  maxHeight: '500px',
  width: '100%',
  maxWidth: '200px',
  backgroundColor: 'rgba(255,255,255,0.1)',
  boxShadow: '0px 5px 15px 5px rgba(66, 68, 90, 0.1)',
  cursor: 'pointer',

  button: {
    position: 'absolute',
    width: '70%',
    zIndex: '12',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    opacity: '0',
    transition: '0.2s all',
    boxShadow: '0px 3px 3px 1px rgba(66, 68, 90, 0.3)',
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backdropFilter: 'blur(2px)',
    zIndex: '11',
    opacity: '0',
    transition: 'opacity 0.3s ease',
  },
  '&:hover::before': {
    opacity: '1',
  },

  '&:hover': {
    button: {
      opacity: '1',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:active': {
        backgroundColor: theme.palette.primary.dark,
      },
    },
  },

  [theme.breakpoints.down('sm')]: {
    maxHeight: '150px',
    maxWidth: '170px',
  },
});

export const CustomSearchSlide = styled('div')(({ theme }) => ({
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
  mr: '10px',
  mb: '10px',
}));
