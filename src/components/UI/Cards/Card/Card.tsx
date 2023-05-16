// basic
import Image from 'next/image';

// mui
import { Typography, Box } from '@mui/material';

// image
import singInImg from '@/assets/singInBg.png';

// styled components
import {
  CustomCardWrapper,
  CustomTypographyWrapper,
  CustomImage,
  CustomTypographyName,
} from './CardStyles';

// interface
import { ICardProps } from '@/types/cardTypes';

// FUNCTIONAL COMPONENT
const Card: React.FC<ICardProps> = ({
  productCategory,
  productImageSrc,
  productName,
  productPrice,
  children,
}): JSX.Element => {
  return (
    <CustomCardWrapper>
      <Box>
        <CustomImage src={productImageSrc} alt="product template" width={320} height={380} />
      </Box>
      {children}
      <CustomTypographyWrapper>
        <CustomTypographyName variant="subtitle1">{productName}</CustomTypographyName>
        <Typography variant="subtitle1">{`$` + productPrice}</Typography>
      </CustomTypographyWrapper>
      <Typography variant="subtitle2Small">{productCategory}</Typography>
    </CustomCardWrapper>
  );
};

export default Card;
