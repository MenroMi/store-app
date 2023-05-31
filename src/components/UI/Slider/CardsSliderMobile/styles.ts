import theme from '@/utils/mui/theme';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import Slider from 'react-slick';

export const CustomSlider = styled(Slider)(() => ({
  // margin: '50px',
  //   maxWidth: '100%',
  alignSelf: 'center',
  maxWidth: '95%',
}));

export const CustomEmptyStateWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));
