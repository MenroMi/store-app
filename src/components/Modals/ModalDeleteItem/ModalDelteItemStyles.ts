import styled from '@emotion/styled';
import { Box } from '@mui/material';

interface ICustomModalWrapperProps {
  display: string;
}

export const CustomModalWrapper = styled.div(({ display }: ICustomModalWrapperProps) => ({
  position: 'absolute',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(51, 51, 51, 0.09)',
  backdropFilter: 'blur(9px)',
  zIndex: '99',
  display: display,
  justifyContent: 'center',
  alignItems: 'center',
  top: 0,
  left: 0,
}));

export const CustomModalBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  backgroundColor: '#fff',
  maxWidth: '656px',
  padding: '32px',
  borderRadius: '8px',
}));
