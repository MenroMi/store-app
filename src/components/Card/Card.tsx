// basic
import Image from 'next/image';

// mui
import { Typography } from '@mui/material';

// images
import dotsBtn from '@/assets/icons/dots.svg';

// styled components
import { CustomCardWrapper, CustomTypographyWrapper, CustomDotsImage } from './CardStyles';

// interface
import { ICardProps } from '@/types/cardTypes';

// FUNCTIONAL COMPONENT
const Card: React.FC<ICardProps> = ({
  productCategory,
  productImageSrc,
  productName,
  productPrice,
}): JSX.Element => {
  return (
    <CustomCardWrapper>
      <Image
        style={{ maxWidth: '100%', height: '100%' }}
        src={productImageSrc}
        alt="product template"
        placeholder="blur"
      />
      <CustomDotsImage src={dotsBtn} alt="More" />
      <CustomTypographyWrapper>
        <Typography variant="subtitle1">{productName}</Typography>
        <Typography variant="subtitle1">{productPrice}</Typography>
      </CustomTypographyWrapper>
      <Typography variant="subtitle2Small">{productCategory}</Typography>
    </CustomCardWrapper>
  );
};

export default Card;
