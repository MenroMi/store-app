import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

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
