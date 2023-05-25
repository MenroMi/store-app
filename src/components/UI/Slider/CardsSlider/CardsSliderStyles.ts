import theme from '@/utils/mui/theme';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import Slider from 'react-slick';

export const CustomSlider = styled(Slider)(() => ({
  margin: '50px',

  [theme.breakpoints.down('lg')]: {
    maxWidth: '1100px',
  },

  [theme.breakpoints.down('md')]: {
    maxWidth: '700px',
  },

  [theme.breakpoints.down('sm')]: {
    maxWidth: '350px',
  },
}));

export const CustomEmptyStateWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));
