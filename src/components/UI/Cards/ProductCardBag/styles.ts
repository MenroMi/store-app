import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomBagWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '983px',
  height: '234px',
  borderRadius: '6px',
  padding: '10px',
}));

export const CustomBox = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
}));

export const CustomButton = styled(Button)(() => ({
  padding: '0',
  justifyContent: 'flex-end',
  minHeight: '28px',
}));
