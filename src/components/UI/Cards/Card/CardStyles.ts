import { ICustomCardWrapperProps } from '@/types/cardTypes';
import { styled } from '@mui/material/styles';
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
