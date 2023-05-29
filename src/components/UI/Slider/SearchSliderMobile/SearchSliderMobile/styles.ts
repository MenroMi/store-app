import theme from '@/utils/mui/theme';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import Slider from 'react-slick';

export const SearchSliderMobile = styled(Slider)(() => ({
  margin: '0 50px 0 50px',
  maxWidth: '65%',
  width: '100%',

  '& .slick-list': {
    height: '280px',
  },

  '& .slick-arrow.slick-next': {
    right: '-25px',
  },

  [theme.breakpoints.down('lg')]: {
    maxWidth: '100%',
  },

  [theme.breakpoints.down('sm')]: {
    margin: '0 0 0 20px',
    '& .slick-list': {
      height: '250px',
    },
    maxWidth: '300px',
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
