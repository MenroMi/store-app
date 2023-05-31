import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import theme from '@/utils/mui/theme';

export const CustomSearchOverlay = styled('div')({
  height: 'calc(100vh - 280px)',
  width: `100%`,
  display:'flex',
 
  justifyContent: 'center',
  [theme.breakpoints.down(900)]: {
    height: 'calc(100vh - 230px)',
    paddingLeft:'20px',
  },
  [theme.breakpoints.down(600)]: {
    height: 'calc(100vh - 215px)',
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

export const CustomProguctsBlock = styled('div')({
  maxHeight: 'calc(100%)',
  display: 'flex',
  justifyContent: 'center',
  maxWidth: `calc(${320 * 5}px + ${54 * 4}px)`,
  [theme.breakpoints.down(1916)]: {
    maxWidth: `calc(${320 * 4}px + ${54 * 3}px)`,
  },
  [theme.breakpoints.down(1542)]: {
    maxWidth: `calc(${320 * 3}px + ${54 * 2}px )`,
  },
  [theme.breakpoints.down(1168)]: {
    maxWidth: `calc(${320 * 2}px + ${54 * 1}px)`,
  },
  [theme.breakpoints.down(714)]: {
    maxWidth: `calc(${320}px )`,
  },
  [theme.breakpoints.down(600)]: {
    maxWidth: `calc(${152 * 3}px + ${16 * 2}px)`,
  },
  [theme.breakpoints.down(540)]: {
    maxWidth: `calc(${152 * 2}px + ${16 * 1}px)`,
  },
  [theme.breakpoints.down(360)]: {
    maxWidth: `calc(${152 * 1}px )`,
  },
});



export const CardsGridContainer = styled(Grid)(({ theme }) => ({
  '&.MuiGrid-root': {
    marginTop: '2.25em',
  },
  position: 'relative',
  width: '100%',
  justifyContent: 'start',
  columnGap: '54px',
  rowGap: '40px',
  height: '100%',

  [theme.breakpoints.down('sm')]: {
    '&.MuiGrid-root': {
      marginTop: '1em',
    },
    columnGap: '16px',
    rowGap: '20px',
    justifyContent: 'start',
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
