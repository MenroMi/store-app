// mui
import { Box, Button, CircularProgress } from '@mui/material';

// constants
import { blurDataURL } from '@/constants/urls';

// styled components
import { CustomImage, CustomTypographyName } from '@/components/UI/Cards/Card/styles';
import { CustomSearchSlideWrapper, CustomSearchSlide } from './styles';

// interface
import { ISlideProps } from '@/types/slideTypes';

// FUNCTIONAL COMPONENT
const SearchSlideDesktop: React.FC<ISlideProps> = ({
  productCategory,
  productImageSrc,
  productName,
  productPrice,
  children,
  id,
}): JSX.Element => {
  return (
    <CustomSearchSlideWrapper>
      <CustomSearchSlide
        sx={{
          height: { sm: '200px', xs: '200px' },
        }}
      >
        <CustomImage
          src={productImageSrc}
          alt="product template"
          fill
          priority={true}
          placeholder="blur"
          blurDataURL={blurDataURL}
          sx={{ objectPosition: 'bottom' }}
        />
      </CustomSearchSlide>
      <Box sx={{ p: '5px' }}>
        <CustomTypographyName variant="h6">{productName}</CustomTypographyName>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <CustomTypographyName variant="h6">{productCategory}</CustomTypographyName>
          <CustomTypographyName variant="subtitle2Small">{'$' + productPrice}</CustomTypographyName>
        </Box>
      </Box>
      {children}
    </CustomSearchSlideWrapper>
  );
};

export default SearchSlideDesktop;
