// mui
import { Typography, Box } from '@mui/material';

// styled components
import {
  CustomCardWrapper,
  CustomTypographyWrapper,
  CustomImage,
  CustomTypographyName,
} from './CardStyles';

// interface
import { ICardProps } from '@/types/cardTypes';
import { blurDataURL } from '@/constants/urls';

// FUNCTIONAL COMPONENT
const Card: React.FC<ICardProps> = ({
  productCategory,
  productImageSrc,
  productName,
  productPrice,
  marginRight,
  children,
}): JSX.Element => {
  return (
    <CustomCardWrapper marginRight={marginRight}>
      <Box sx={{ height: { sm: '380px', xs: '250px' }, overflow: 'hidden' }}>
        <CustomImage
          src={productImageSrc}
          alt="product template"
          width={320}
          height={380}
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
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
