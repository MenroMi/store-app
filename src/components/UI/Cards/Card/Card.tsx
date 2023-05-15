// basic
import Image from 'next/image';

// mui
import { Typography } from '@mui/material';

// styled components
import { CustomCardWrapper, CustomTypographyWrapper } from './CardStyles';

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
      <Image
        style={{ maxWidth: '100%', height: '100%' }}
        src={productImageSrc}
        alt="product template"
        placeholder="blur"
      />
      {children}
      <CustomTypographyWrapper>
        <Typography variant="subtitle1" sx={{ lineHeight: '1.3' }}>
          {productName}
        </Typography>
        <Typography variant="subtitle1">{`$` + productPrice}</Typography>
      </CustomTypographyWrapper>
      <Typography variant="subtitle2Small">{productCategory}</Typography>
    </CustomCardWrapper>
  );
};

export default Card;
