import { useRouter } from 'next/router';

// mui
import { Typography, Box } from '@mui/material';

// styled components
import {
  CustomSlideWrapper,
  CustomTypographyWrapper,
  CustomImage,
  CustomTypographyName,
} from './SlideStyles';

// constants
import { Routes } from '@/constants/routes';

// interface
import { ISlideProps } from '@/types/slideTypes';

const keyStr =
  'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8lxJXDwAGaQJBAQNgCgAAAABJRU5ErkJggg==';

// FUNCTIONAL COMPONENT
const Slide: React.FC<ISlideProps> = ({
  productCategory,
  productImageSrc,
  productName,
  productPrice,
  marginRight,
  children,
  id,
}): JSX.Element => {
  const router = useRouter();

  return (
    <CustomSlideWrapper
      marginRight={marginRight}
      onClick={async (e) => {
        await router.push(`${Routes.products}/${id}`);
      }}
    >
      <Box sx={{ height: { xs: '250px', sm: '380px' }, overflow: 'hidden', position: 'relative' }}>
        <CustomImage
          src={productImageSrc}
          alt="product template"
          width={320}
          height={380}
          placeholder="blur"
          blurDataURL={keyStr}
        />
        {children}
      </Box>
      <CustomTypographyWrapper>
        <CustomTypographyName variant="subtitle1">{productName}</CustomTypographyName>
        <Typography variant="subtitle1">{`$` + productPrice}</Typography>
      </CustomTypographyWrapper>
      <Typography variant="subtitle2Small">{productCategory}</Typography>
    </CustomSlideWrapper>
  );
};

export default Slide;
