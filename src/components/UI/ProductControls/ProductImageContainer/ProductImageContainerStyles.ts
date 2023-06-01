import theme from '@/utils/mui/theme';
import { styled } from '@mui/material';
import { Box } from '@mui/material';
import Image from 'next/image';

interface IDeleteIconContainerProps {
  display: string;
}

export const CustomImage = styled(Image)(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',

  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
}));

export const ImageContainer = styled(Box)(() => ({
  position: 'relative',
  width: '100%',
  height: '100%',

  [theme.breakpoints.up('lg')]: {
    '&:hover': {
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        zIndex: 1,
      },
    },
  },
}));

export const DeleteIconContainer = styled(Box)(({ display }: IDeleteIconContainerProps) => ({
  position: 'absolute',
  display: display,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,

  '& > img': {
    cursor: 'pointer',
  },
}));
