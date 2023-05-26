// mui
import { Typography, Box } from '@mui/material';

// styled components
import {
  CustomSlideWrapper,
  CustomTypographyWrapper,
  CustomImage,
  CustomTypographyName,
} from './SlideStyles';

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
}): JSX.Element => {
  return (
    <CustomSlideWrapper marginRight={marginRight}>
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
