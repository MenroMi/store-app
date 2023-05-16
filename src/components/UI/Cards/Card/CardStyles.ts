import { styled } from '@mui/material';

export const CustomCardWrapper = styled('div')(() => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '320px',
  maxHeight: '443px',
}));

export const CustomTypographyWrapper = styled('div')(() => ({
  marginTop: '12px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));
