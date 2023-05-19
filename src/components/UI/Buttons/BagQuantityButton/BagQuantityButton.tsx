// basic
import Image from 'next/image';

// mui
import { Typography, useTheme, Box, useMediaQuery } from '@mui/material';
import theme from '@/utils/mui/theme';

// image
import AddIcon from 'src/assets/icons/add.svg';
import RemoveIcon from 'src/assets/icons/remove.svg';

// styles
import { CustomButtonWrapper, CustomFabButton } from './styles';

// interface
interface IBagQuantityButtonProps {
  id: number;
  quantity: number;
  addProduct: () => void;
  removeProduct: () => void;
}

const BagQuantityButton: React.FC<IBagQuantityButtonProps> = ({
  quantity,
  addProduct,
  removeProduct,
}) => {
  const {
    palette: {
      text: { caption },
    },
  } = useTheme();
  const queryUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <CustomButtonWrapper>
      <Typography
        variant="btnIconText"
        color={caption}
        sx={{
          display: queryUpSm ? 'block' : 'none',
        }}
      >
        Quantity:
      </Typography>
      <CustomFabButton
        onClick={() => removeProduct()}
        aria-label="remove"
        sx={{
          width: queryUpSm ? 'auto' : '20px',
          height: queryUpSm ? 'auto' : '20px',
          margin: queryUpSm ? '0 8px 0 8px' : '0 8px 0 0',
        }}
      >
        <Box
          component={Image}
          src={RemoveIcon}
          alt="remove"
          sx={{
            width: queryUpSm ? 'auto' : '15px',
            height: queryUpSm ? 'auto' : '15px',
          }}
        ></Box>
      </CustomFabButton>
      <Typography variant="btnIconText" color={caption}>
        {quantity}
      </Typography>
      <CustomFabButton
        onClick={() => addProduct()}
        aria-label="add"
        sx={{
          width: queryUpSm ? 'auto' : '20px',
          height: queryUpSm ? 'auto' : '20px',
          margin: queryUpSm ? '0 8px 0 8px' : '0 0 0 8px',
        }}
      >
        <Box
          component={Image}
          src={AddIcon}
          alt="add"
          sx={{
            width: queryUpSm ? 'auto' : '15px',
            height: queryUpSm ? 'auto' : '15px',
          }}
        ></Box>
      </CustomFabButton>
    </CustomButtonWrapper>
  );
};

export default BagQuantityButton;
