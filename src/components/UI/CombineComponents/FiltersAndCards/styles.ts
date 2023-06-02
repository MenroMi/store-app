import { styled, Box } from '@mui/material';

export const CustomAside = styled('aside')(({ theme }) => ({
  height: '550px',
  width: '100%',
  maxWidth: '340px',
  margin: '0 40px 0 0',
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

  [theme.breakpoints.down('lg')]: {
    maxWidth: '310px',
    margin: '0 30px 0 0',
  },

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const CustomMainFilters = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: '16px',
  width: '100%',
  height: '100%',
}));
