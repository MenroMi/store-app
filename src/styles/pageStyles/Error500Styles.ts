import { Grid, Button, styled, Typography, Stack } from '@mui/material';
import Image from 'next/image';

export const Description = styled(Typography)(({ theme }) => ({
  marginTop: 12,
  marginBottom: 40,
  color: theme.palette.primary.contrastText,
  [theme.breakpoints.between('xs', 'sm')]: {
    fontSize: 12,
  },
}));

export const ErrorMessage = styled(Stack)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  zIndex: 1,
  color: theme.palette.primary.contrastText,
  [theme.breakpoints.between('xs', 'sm')]: {
    width: '80%',
  },
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  width: '280px',
  padding: 5,
  [theme.breakpoints.between('xs', 'sm')]: {
    width: '230px',
    alignSelf: 'flex-end',
  },
}));

export const BackgroundImage = styled(Image)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  objectFit: 'cover',
});

export const ContentContainer = styled(Grid)(({ theme }) => ({
  paddingTop: '135px',
  paddingBottom: '40px',
  [theme.breakpoints.between('xs', 'sm')]: {
    height: '100%',
  },
}));
