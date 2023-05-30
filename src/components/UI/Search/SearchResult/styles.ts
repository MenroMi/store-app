import { styled } from '@mui/material/styles';
import { Button, Grid, Typography } from '@mui/material';
import theme from '@/utils/mui/theme';

export const CustomTypographyH2 = styled(Typography)(({ theme }) => ({
  padding: '0 20px',

  [theme.breakpoints.up('sm')]: {
    lineHeight: '45px',
  },
}));

export const CustomHideFilterBtn = styled(Button)(({ theme }) => ({
  fontWeight: '400',
  color: theme?.palette?.text?.primary,
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },

  paddingTop: '0',
  paddingBottom: '0',

  [theme.breakpoints.down('sm')]: {
    fontWeight: '300',
  },
}));

export const CustomGridContainer = styled(Grid)({
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme?.palette?.primary?.contrastText,
});

export const ResetButton = styled(Button)(({ theme }) => ({
  fontSize: '14px',
  borderRadius: '10px',
  color: theme?.palette?.text?.primary,
  paddingTop: '0',
  paddingBottom: '0',
  fontWeight: 400,
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
}));
