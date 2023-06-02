
import { ICustomSlideWrapperProps } from '@/types/slideTypes';
import theme from '@/utils/mui/theme';
import { styled, Typography } from '@mui/material';

import Image from 'next/image';

export const CustomSlideWrapper = styled('div')<ICustomSlideWrapperProps>(({ marginRight }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '320px',
  maxHeight: '443px',
  cursor: 'pointer',

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
  position: 'relative',
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});
export const CustomTypographyName = styled(Typography)({
  display: '-webkit-box',
  lineHeight: '1.3',
  WebkitLineClamp: '1',
  WebkitBoxOrient: 'vertical',
  lineClamp: 1,
  overflow: 'hidden',
});
