import { styled } from '@mui/material/styles';
import Image from 'next/image';

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

export const CustomDotsImage = styled(Image)(() => ({
  position: 'absolute',
  top: '20px',
  right: '16px',
  cursor: 'pointer',
}));
