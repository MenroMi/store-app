import { CustomPrimaryButton } from './styles';

// interface
interface ButtonProps {
  children: React.ReactNode;
}

const PrimaryButton = ({ children }: ButtonProps) => {
  return (
    <CustomPrimaryButton
      type="submit"
      variant="contained"
      sx={{
        fontSize: { sx: '12px', sm: '16px' },
      }}
    >
      {children}
    </CustomPrimaryButton>
  );
};

export default PrimaryButton;
