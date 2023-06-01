// mui
import { Typography, Box } from '@mui/material';

// styled components
import {
  CustomCardWrapper,
  CustomTypographyWrapper,
  CustomImage,
  CustomTypographyName,
} from './styles';

// interface
import { ICardProps } from '@/types/cardTypes';
import { blurDataURL } from '@/constants/urls';
import { Routes } from '@/constants/routes';
import { useRouter } from 'next/router';

// FUNCTIONAL COMPONENT
const Card: React.FC<ICardProps> = ({
  productCategory,
  productImageSrc,
  productName,
  productPrice,
  productId,
  marginRight,
  children,
}): JSX.Element => {
  const router = useRouter();
  return (
    <CustomCardWrapper marginRight={marginRight} sx={{cursor: 'pointer'}} onClick={async (e) => { 
      await router.push(`${Routes.products}/${productId}`);
    }}>
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
