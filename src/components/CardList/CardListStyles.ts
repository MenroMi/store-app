import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

export const CardsGridContainer = styled(Grid)(({ theme }) => ({
  '&.MuiGrid-root': {
    marginTop: '2.25em',
  },
  margin: '0 auto',
  justifyContent: 'space-between',
}));
