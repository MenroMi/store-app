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
      <Box
        sx={{
          height: { sm: '380px', xs: '250px' },
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <CustomImage
          src={productImageSrc}
          alt="product template"
          fill
          priority={true}
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
        {children}
      </Box>
      <CustomTypographyWrapper>
        <CustomTypographyName variant="subtitle1">{productName}</CustomTypographyName>
        <Typography variant="subtitle1">{`$` + productPrice}</Typography>
      </CustomTypographyWrapper>
      <Typography variant="subtitle2Small">{productCategory}</Typography>
    </CustomCardWrapper>
  );
};

export default Card;
