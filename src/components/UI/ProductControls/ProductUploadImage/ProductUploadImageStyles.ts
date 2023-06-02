import styled from '@emotion/styled';
import { Box } from '@mui/material';

interface ICustomUploadWrapperProps {
  borderColor: string;
}

export const CustomUploadWrapper = styled(Box)(({ borderColor }: ICustomUploadWrapperProps) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: `1px dashed ${borderColor}`,
  borderRadius: '8px',
  padding: '35% 0',
}));
