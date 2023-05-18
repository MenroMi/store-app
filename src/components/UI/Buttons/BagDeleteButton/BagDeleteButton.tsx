// basic
import Image from 'next/image';

// mui
import { Typography, useTheme, Box, Theme, useMediaQuery } from '@mui/material';

// image
import DeleteIcon from '@/assets/icons/delete.svg';
import { CustomButton } from './styles';

// interface
interface IBagDeleteButtonProps {
  deleteProduct: () => void;
}

const BagDeleteButton = ({ deleteProduct }: IBagDeleteButtonProps) => {
  const theme = useTheme<Theme>();
  const queryUpSm = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <CustomButton onClick={deleteProduct}>
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
