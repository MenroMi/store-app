import { styled } from '@mui/material/styles';

export const CustomAside = styled('aside')(({ theme }) => ({
  width: '380px',
  height: '100%',
  margin: '0 60px 0 0',

  [theme.breakpoints.down('lg')]: {
    width: '280px',
  },

  [theme.breakpoints.down('md')]: {
    display: 'none',
    width: '280px',
  },
}));
