import { ICustomCardWrapperProps } from '@/types/cardTypes';
import { styled, Typography } from '@mui/material';

import Image from 'next/image';

export const CustomCardWrapper = styled('div')<ICustomCardWrapperProps>(({ marginRight }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '320px',
  maxHeight: '443px',

  '&:not(:last-child)': {
    marginRight: marginRight || 0,
  },
}));

export const CustomTypographyWrapper = styled('div')(() => ({
  marginTop: '12px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const CustomImage = styled(Image)({
  width: '100%',
  height: '100%',
});

export const CustomTypographyName = styled(Typography)({
  display: '-webkit-box',
  lineHeight: '1.3',
  WebkitLineClamp: '1',
  WebkitBoxOrient: 'vertical',
  lineClamp: 1,
  overflow: 'hidden',
});
