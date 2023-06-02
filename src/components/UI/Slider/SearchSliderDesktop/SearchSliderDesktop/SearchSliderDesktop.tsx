// basic
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// mui
import { Box, Typography } from '@mui/material';

// images
import emptyIcon from '@/assets/icons/empty.svg';

// constants
import { searchSliderOptionsOnDesktop } from '@/constants/ui';

// components
import SliderArrow from '@/components/UI/Slider/SliderArrow/SliderArrow';

// styled components
import { CustomEmptyStateWrapper } from '@/components/UI/Slider/CardsSlider/CardsSliderStyles';
import { SearchSlider } from './styles';

// interface
import { ICardsSliderProps } from '@/types/cardsSliderTypes';
import onCreateSlides from '@/utils/slider/createSlides';

const SearchSliderDesktop: React.FC<ICardsSliderProps> = ({ products }): JSX.Element => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const sliderSettings = {
    nextArrow: <SliderArrow />,
    prevArrow: <SliderArrow next={false} />,
    ...searchSliderOptionsOnDesktop,
  };

  if (products?.length > 3) {
    return (
      <SearchSlider {...sliderSettings}>
        {onCreateSlides(products, router, setIsLoading, isLoading)}
      </SearchSlider>
    );
  } else if (products?.length > 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          gap: '100px',
          m: '0 50px 0 50px',
          justifyContent: 'center',
          flex: '1',
        }}
      >
        {onCreateSlides(products, router, setIsLoading, isLoading)}
      </Box>
    );
  } else {
    return (
      <CustomEmptyStateWrapper sx={{ flex: '1', alignSelf: 'center' }}>
        <Box
          component={Image}
          src={emptyIcon}
          alt="No products"
          sx={{ width: '72px', height: '72px', opacity: '0.1' }}
        />
        <Typography variant="h5" sx={{ mt: '10px' }}>
          Unfortunately, goods with this name do not exist in our database
        </Typography>
      </CustomEmptyStateWrapper>
    );
  }
};

export default SearchSliderDesktop;
