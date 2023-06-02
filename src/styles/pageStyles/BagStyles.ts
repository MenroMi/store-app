import { Box, styled } from '@mui/material';

export const CustomBagPageWrapper = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  maxWidth: '1528px',
  marginInline: 'auto',
  padding: '0',
}));

export const CustomTotalSummaryWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  fontWeight: '500',
  paddingBottom: '22px',
  paddingTop: '18px',
  borderBottom: '1px #EAECF0 solid',
  borderTop: '1px #EAECF0 solid',
}));

export const CustomBagBtnsWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '50px',
  marginBottom: '50px',
}));

export const CustomBagBtnWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  position: 'relative',
}));