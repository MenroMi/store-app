import { keyframes, styled } from '@mui/material/styles';

const spinner =  keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const ButtonLoaderStyles = styled('div')(({ theme:{palette:{primary:{main}}} }) => ({
  height: '20px',
  width: '20px',
  margin: '4px',
  borderLeft: `2px solid ${main}`,
  borderTop: `2px solid ${main}`,
  borderRight: `2px solid ${main}`,
  borderBottom: '2px solid transparent',
  borderRadius: '50%',
  maxWidth: '436px',
  animation: `${spinner} 0.5s linear infinite`,
}));

