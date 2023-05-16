import { styled, Typography } from '@mui/material';
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

export const CustomImage = styled(Image)(({ theme }) => ({
  width: '100%',
  height: '380px',
  objectFit: 'cover',
  objectPosition: 'center',

  [theme.breakpoints.between('md', 'lg')]: {
    height: '300px',
  },

  [theme.breakpoints.between('sm', 'md')]: {
    height: '280px',
  },

  [theme.breakpoints.between('xs', 'sm')]: {
    height: '200px',
  },
}));

export const CustomTypographyName = styled(Typography)({
  display: '-webkit-box',
  lineHeight: '1.3',
  WebkitLineClamp: '1',
  WebkitBoxOrient: 'vertical',
  lineClamp: 1,
  overflow: 'hidden',
});
