import { styled } from '@mui/material/styles';

export const CustomAside = styled('aside')(({ theme }) => ({
  height: '100%',
  margin: '0 60px 0 0',

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
