import theme from '@/utils/mui/theme';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import Slider from 'react-slick';

export const CustomSlider = styled(Slider)(() => ({
  // margin: '50px',
  maxWidth: '1350px',
  alignSelf: 'center',

  [theme.breakpoints.down(1800)]: {
    maxWidth: '1000px',
  },

  [theme.breakpoints.down(1400)]: {
    maxWidth: '850px',
  },
}));

export const CustomEmptyStateWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));
