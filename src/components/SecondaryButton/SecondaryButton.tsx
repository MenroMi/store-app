import { Button } from '@mui/material';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

const PrimaryButton = ({ children }: ButtonProps) => {
  return (
    <Button
      sx={{
        backgroundColor: 'transparent',
        border: '1px solid',
        width: '100%',
        borderRadius: '5px',
        fontFamily: '"Work Sans", sans-serif',
        fontWeight: 500,
        textTransform: 'none',
        cursor: 'pointer',
        maxWidth: '436px',
        fontSize: { md: '16px' },
      }}
      variant="outlined"
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
