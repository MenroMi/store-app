import { styled } from '@mui/material';

export const MobileSlideWrapper = styled('div')(() => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  border: '1px solid rgba(0,0,0,0.2)',
  borderRadius: '5px',
  alignItems: 'center',
  marginTop: '10px',
  padding: '10px',

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
}));
