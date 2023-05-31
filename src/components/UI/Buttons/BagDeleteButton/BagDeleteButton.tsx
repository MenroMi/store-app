// basic
import Image from 'next/image';

// mui
import { Typography, useTheme, Box, Theme, useMediaQuery } from '@mui/material';

// image
import DeleteIcon from '@/assets/icons/delete.svg';
import { CustomButton } from './styles';

// context
import { useShoppingCart } from '@/contexts/shoppingCardContext';

// interface
interface IBagDeleteButtonProps {
  id: number;
}

const BagDeleteButton: React.FC<IBagDeleteButtonProps> = ({ id }) => {
  const theme = useTheme<Theme>();
  const queryUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  const { removeFromCart } = useShoppingCart();

  return (
    <CustomButton onClick={() => removeFromCart(id)}>
      <Box
        component={Image}
        src={DeleteIcon}
        alt="delete"
        sx={{
          position: 'relative',
          right: queryUpSm ? '7px' : '2px',
          height: queryUpSm ? 'auto' : '15px',
        }}
      ></Box>
      <Typography variant="btnIconText" color={theme?.palette?.text?.iconLight}>
        Delete
      </Typography>
    </CustomButton>
  );
};

export default BagDeleteButton;
