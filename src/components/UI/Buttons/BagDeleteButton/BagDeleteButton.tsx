// basic
import Image from 'next/image';

// mui
import { Typography, useTheme, Box, Theme, useMediaQuery } from '@mui/material';

// image
import DeleteIcon from '@/assets/icons/delete.svg';
import { CustomButton } from './styles';

// context
import { BagContext } from '@/context/BagContext';
import { useContext } from 'react';
import { CardBagContextType } from '@/types/productCardBag';

// interface
interface IBagDeleteButtonProps {
  id: number;
}

const BagDeleteButton: React.FC<IBagDeleteButtonProps> = ({ id }) => {
  const theme = useTheme<Theme>();
  const queryUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  const context = useContext(BagContext) as CardBagContextType;

  return (
    <CustomButton onClick={() => context.removeFromCart(id)}>
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
