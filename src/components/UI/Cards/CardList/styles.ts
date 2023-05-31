import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import theme from '@/utils/mui/theme';

export const CustomSearchOverlay = styled('div')({
  height: 'calc(100vh - 350px)',
  width: '100%',
  overflowY: 'scroll',
  overflowX: 'hidden',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    height: 'calc(100vh - 306px)',
  },
  [theme.breakpoints.down('sm')]: {
    height: 'calc(100vh - 306px)',
  },

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
  width: '100%',
  justifySelf: 'center',
  justifyContent: 'center',
  alignContent: 'start',
  columnGap: '54px',
  rowGap: '40px',
  height: '100%',

  [theme.breakpoints.down('sm')]: {
    '&.MuiGrid-root': {
      marginTop: '1em',
    },
    columnGap: '20px',
    rowGap: '16px',
    justifyContent: 'space-around',
    padding: '0 4px 0 20px',
  },
}));

export const CatalogIsEmptyContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  left: '51%',
  top: '50%',
  transform: 'translateX(-49%) translateY(-50%)',
  gap: '20px',
});

export const CustomLoaderWrapper = styled('div')({
  height: '100%',
  width: '100%',
  backgroundColor: 'rgba(255,255, 255, 0.5)',
  backdropFilter: 'blur(5px)',
  position: 'absolute',
  zIndex: '5000',
  top: '0',
  transition: '0.3s ease-in',
});
