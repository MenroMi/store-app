// basic
import Image from 'next/image';

// mui
import { Box, Typography } from '@mui/material';

// image
import singInImg from '../../assets/singInBg.png';

// FUNCTIONAL COMPONENT
const Card: React.FC = (): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column" maxWidth="320px" maxHeight="443px">
      <Image
        style={{ maxWidth: '100%', height: '100%' }}
        src={singInImg}
        alt="product template"
        placeholder="blur"
      />
      <Box
        sx={{ mt: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Typography variant="subtitle1">Nike Air Max 270</Typography>
        <Typography variant="subtitle1">$160</Typography>
      </Box>
      <Typography variant="subtitle2Gray">Women&apos;s Shoes</Typography>
    </Box>
  );
};

export default Card;
