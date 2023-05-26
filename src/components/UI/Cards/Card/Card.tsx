// mui
import { Typography, Box, Button } from '@mui/material';

// image
import signIcon from '@/assets/singInBg.png';

// styled components
import {
  CustomCardWrapper,
  CustomTypographyWrapper,
  CustomImage,
  CustomTypographyName,
} from './CardStyles';

// interface
import { ICardProps } from '@/types/cardTypes';
import { StaticImageData } from 'next/image';
import { useShoppingCart } from '@/context/ShoppingCartContext';
import { useContext } from 'react';

const keyStr =
  'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8lxJXDwAGaQJBAQNgCgAAAABJRU5ErkJggg==';

// FUNCTIONAL COMPONENT
const Card: React.FC<ICardProps> = ({
  id,
  productCategory,
  productImageSrc,
  productName,
  productPrice,
  marginRight,
  children,
}): JSX.Element => {
  const { increaseCartQuantity } = useShoppingCart();
  return (
    <CustomCardWrapper marginRight={marginRight}>
      <Box sx={{ height: { sm: '380px', xs: '250px' }, overflow: 'hidden' }}>
        <CustomImage
          src={productImageSrc}
          alt="product template"
          width={320}
          height={380}
          placeholder="blur"
          blurDataURL={keyStr}
        />
      </Box>
      {children}
      <CustomTypographyWrapper>
        <CustomTypographyName variant="subtitle1">{productName}</CustomTypographyName>
        <Typography variant="subtitle1">{`$` + productPrice}</Typography>
      </CustomTypographyWrapper>
      <Typography variant="subtitle2Small">{productCategory}</Typography>
      <Button onClick={() => increaseCartQuantity(id!)}>Add to card</Button>
    </CustomCardWrapper>
  );
};

export default Card;
