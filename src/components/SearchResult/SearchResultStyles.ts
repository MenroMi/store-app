import { styled } from '@mui/material/styles';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import theme from '@/utils/mui/theme';

export const CustomTypographyH2 = styled(Typography)(() => ({
  padding: '0 20px',
  margin: '0',
  lineHeight: '53px',
}));

export const CustomHideFilterBtn = styled(Button)(() => ({
  fontWeight: '400',
  lineHeight: '28px',
  color: theme?.palette?.text?.primary,
  textTransform: 'none',
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
}));

export const CustomGridContainer = styled(Grid)(() => ({
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  top: '0',
  backgroundColor: theme?.palette?.primary?.contrastText,
}));
