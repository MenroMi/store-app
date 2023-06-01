// basic
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

// mui
import { Box, CircularProgress } from '@mui/material';

// styled components
import { CustomTypographyName } from '@/components/UI/Cards/Card/styles';
import { MobileSlideWrapper } from './styles';

// interface
import { ISlideProps } from '@/types/slideTypes';
import { Routes } from '@/constants/routes';

// FUNCTIONAL COMPONENT
const SearchSlideMobile: React.FC<ISlideProps> = ({
  productCategory,
  productImageSrc,
  productName,
  productPrice,
  id,
}): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  return (
    <MobileSlideWrapper
      onClick={() => {
        setIsLoading(true);
        router.push(`${Routes.products}/${id}`);
      }}
    >
      {isLoading && (
        <CircularProgress
          sx={{ position: 'absolute', zIndex: 15, left: '47%', transform: 'translateX(-50%)' }}
        />
      )}
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
    </MobileSlideWrapper>
  );
};

export default SearchSlideMobile;
