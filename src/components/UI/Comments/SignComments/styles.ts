import { styled } from '@mui/material/styles';

export const CustomBoxComments = styled('div')(() => ({
  position: 'absolute',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  top: '48.5%',
  zIndex: '1001',
}));

export const CustomComments = styled('section')(() => ({
  minWidth: '100%',
  backdropFilter: 'blur(12px)',
  border: '2px solid rgba(255, 255, 255, 0.3)',
  borderRadius: '4px',
  padding:'6px 7px',
  display: 'flex',
  gap: '4px',
}));

export const CustomArrow = styled('div')(() => ({
  width: '36px',
  height: '36px',
  border: '2px solid rgba(255, 255, 255, 0.3)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
}));
