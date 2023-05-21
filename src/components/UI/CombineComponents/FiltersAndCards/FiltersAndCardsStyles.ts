import { styled } from '@mui/material/styles';

export const CustomAside = styled('aside')(({ theme }) => ({
  height: '550px',
  width: '100%',
  maxWidth: '340px',
  margin: '0 60px 0 0',
  overflowY: 'scroll',
  overflowX: 'hidden',

  '&::-webkit-scrollbar': {
    width: '20px',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme?.palette?.primary?.main,
    borderRadius: '10px',
    border: '7px solid white',
  },

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
