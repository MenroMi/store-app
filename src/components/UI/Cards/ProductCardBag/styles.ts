import { styled } from '@mui/material/styles';
import Image from 'next/image';

export const CustomBagWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  borderRadius: '6px',
}));

export const CustomBox = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
}));

export const CustomImage = styled(Image)({
  objectFit: 'cover',
});