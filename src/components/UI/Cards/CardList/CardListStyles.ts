import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import theme from '@/utils/mui/theme';

export const CustomSearchOverlay = styled('div')({
  // maxHeight: '65vh',
  maxHeight: '550px',
  width: '100%',
  overflowY: 'scroll',
  overflowX: 'hidden',

  '&::-webkit-scrollbar': {
    width: '20px',
  },
  '&::-webkit-scrollbar-track': {
    marginTop: '30px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme?.palette?.primary?.main,
    borderRadius: '10px',
    border: '7px solid white',
  },
});

export const CardsGridContainer = styled(Grid)(({ theme }) => ({
  '&.MuiGrid-root': {
    marginTop: '2.25em',
  },
  position: 'relative',
  margin: '0 auto',
  minHeight: '400px',
  height: '100%',

  [theme.breakpoints.down('md')]: {
    justifyContent: 'space-between',
  },
  [theme.breakpoints.down('sm')]: {
    '&.MuiGrid-root': {
      marginTop: '1em',
    },
  },
}));

export const CatalogIsEmptyContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translateX(-50%) translateY(-50%)',
  gap: '20px',
});
