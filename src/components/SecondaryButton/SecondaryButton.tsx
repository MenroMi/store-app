// styled component
import { CustomSecondaryButton } from './styles';

interface ButtonProps {
  children: React.ReactNode;
}

const SecondaryButton = ({ children }: ButtonProps) => {
  return (
    <CustomSecondaryButton
      sx={{
        fontSize: { md: '16px' },
      }}
      variant="outlined"
    >
      {children}
    </CustomSecondaryButton>
  );
};

export default SecondaryButton;
