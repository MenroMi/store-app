import { styled } from '@mui/material/styles';

export const SideBar = styled('aside')(({ theme }) => ({
  width: '380px',
  height: '100%',
  margin: '44px 60px 0 0',
  position: 'sticky',
  top: '20px',
  [theme.breakpoints.down('lg')]: {
    width: '280px',
  },

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
