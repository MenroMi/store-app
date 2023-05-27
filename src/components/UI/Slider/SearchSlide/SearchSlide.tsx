// mui
import { Box } from '@mui/material';

// constants
import { keyStr } from '@/constants';

// styled components
import { CustomImage, CustomTypographyName } from '@/components/UI/Cards/Card/CardStyles';
import { CustomSearchSlideWrapper, CustomSearchSlide } from './styles';

// interface
import { ISlideProps } from '@/types/slideTypes';

// FUNCTIONAL COMPONENT
const SearchSlide: React.FC<ISlideProps> = ({
  productCategory,
  productImageSrc,
  productName,
  productPrice,
  children,
}): JSX.Element => {
  return (
    <CustomSearchSlideWrapper>
      <CustomSearchSlide sx={{ height: { md: '200px', sm: '150px', xs: '100px' } }}>
        <CustomImage
          src={productImageSrc}
          alt="product template"
          fill
          priority={true}
          placeholder="blur"
          blurDataURL={keyStr}
        />
        {children}
      </CustomSearchSlide>
      <Box sx={{ p: '5px' }}>
        <CustomTypographyName variant="h6">{productName}</CustomTypographyName>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <CustomTypographyName variant="h6">{productCategory}</CustomTypographyName>
          <CustomTypographyName variant="subtitle2Small">{'$' + productPrice}</CustomTypographyName>
        </Box>
      </Box>
    </CustomSearchSlideWrapper>
  );
};

export default SearchSlide;
