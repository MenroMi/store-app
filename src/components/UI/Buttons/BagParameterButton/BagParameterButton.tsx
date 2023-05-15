// basic
import Image from 'next/image';

// mui
import { Button, Typography, useTheme, Box } from '@mui/material';

// image
import DownIcon from '@/assets/icons/down.svg';

// interface
interface IBagButtonProps {
  ButtonValue: string;
}

const BagParameterButton = ({ ButtonValue }: IBagButtonProps) => {
  const {
    palette: {
      text: { caption },
    },
  } = useTheme();
  return (
    <Button sx={{ padding: '0', justifyContent: 'space-between' }}>
      <Typography variant="btnIconText" color={caption}>
        {ButtonValue}
      </Typography>
      <Box
        component={Image}
        src={DownIcon}
        alt="down"
        sx={{
          position: 'relative',
          top: '2px',
          left: '2px',
          width: { sm: 'auto', xs: '7px' },
        }}
      ></Box>
    </Button>
  );
};

export default BagParameterButton;
