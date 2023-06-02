import { ICustomCardWrapperProps } from '@/types/cardTypes';
import { styled, Typography } from '@mui/material';

import Image from 'next/image';

export const CustomCardWrapper = styled('div')<ICustomCardWrapperProps>(
  ({ marginRight, theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '320px',
    height: '443px',

    [theme.breakpoints.down('sm')]: {
      width: '152px',
      height: '210px',
    },

    '&:not(:last-child)': {
      marginRight: marginRight || 0,
    },

    [theme.breakpoints.down('sm')]: {
      width: '152px',
      height: '210px',
    },
  })
);

export const CustomTypographyWrapper = styled('div')(() => ({
  marginTop: '12px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const CustomImage = styled(Image)({
  objectFit: 'cover',
  zIndex: 10,
});

export const CustomTypographyName = styled(Typography)({
  display: '-webkit-box',
  lineHeight: '1.3',
  WebkitLineClamp: '1',
  WebkitBoxOrient: 'vertical',
  lineClamp: 1,
  overflow: 'hidden',
});
