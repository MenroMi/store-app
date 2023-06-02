// basic
import Image from 'next/image';

// mui
import { Box } from '@mui/material';

// styled components
import { CustomTypographyName } from '@/components/UI/Cards/Card/styles';
import { MobileSliderWrapper } from './styles';

// interface
import { ISlideProps } from '@/types/slideTypes';

// FUNCTIONAL COMPONENT
const SlideMobile: React.FC<ISlideProps> = ({
  productCategory,
  productImageSrc,
  productName,
  productPrice,
  children,
}): JSX.Element => {
  return (
    <MobileSliderWrapper>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          width: '100%',
          gap: '5px',
        }}
      >
        <CustomTypographyName variant="h4" sx={{ fontSize: { sm: '20px', xs: '13px' } }}>
          {productName}
        </CustomTypographyName>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            maxWidth: { md: '250px', xs: '150px' },
            width: '100%',
          }}
        >
          <CustomTypographyName variant="subtitle2Thin">{productCategory}</CustomTypographyName>
          <CustomTypographyName variant="subtitle1">{'$' + productPrice}</CustomTypographyName>
        </Box>
      </Box>
      <Image src={productImageSrc} alt="Product image" width={70} height={70} />
      {children}
    </MobileSliderWrapper>
  );
};

export default SlideMobile;
