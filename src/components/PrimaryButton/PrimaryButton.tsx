import { Button } from '@mui/material';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

const PrimaryButton = ({ children }: ButtonProps) => {
  return (
    <Button
      type="submit"
      variant="contained"
      sx={{
        color: 'white',
        height: '40px',
        textTransform: 'none',
        maxWidth: '436px',
        fontSize: { sx: '12px', sm: '16px' },
        width: '100%',
      }}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
