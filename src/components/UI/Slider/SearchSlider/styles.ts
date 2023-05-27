import theme from '@/utils/mui/theme';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import Slider from 'react-slick';

export const SearchSlider = styled(Slider)(() => ({
  margin: '0 50px 0 50px',
  maxWidth: '65%',

  '& .slick-list': {
    height: '280px',
  },

  [theme.breakpoints.down('sm')]: {
    maxWidth: '400px',
  },

  [theme.breakpoints.down(400)]: {
    maxWidth: '220px',
  },
}));

export const CustomEmptyStateWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));
