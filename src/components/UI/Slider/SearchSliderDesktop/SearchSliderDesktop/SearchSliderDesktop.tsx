// basic
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// mui
import { Box, Typography } from '@mui/material';

// images
import signIn from '@/assets/singInBg.png';
import emptyIcon from '@/assets/icons/empty.svg';

// constants
import { searchSliderOptionsOnDesktop } from '@/constants';

// components
import SliderArrow from '@/components/UI/Slider/SliderArrow/SliderArrow';
import SearchSlideDesktop from '@/components/UI/Slider/SearchSliderDesktop/SearchSlideDesktop/SearchSlideDesktop';

// styled components
import { CustomEmptyStateWrapper } from '@/components/UI/Slider/CardsSlider/CardsSliderStyles';
import { SearchSlider } from './styles';
import { AttrFromData } from '@/types/cardListTypes';

// interface
interface ISearchHeaderSliderProps {
  products: AttrFromData[];
}

const SearchSliderDesktop: React.FC<ISearchHeaderSliderProps> = ({ products }): JSX.Element => {
  const sliderSettings = {
    nextArrow: <SliderArrow />,
    prevArrow: <SliderArrow next={false} />,
    ...searchSliderOptionsOnDesktop,
  };

  const mappingSearchSlides = (products: AttrFromData[]) => {
    return products?.map((product: AttrFromData) => (
      <SearchSlideDesktop
        productCategory={
          product.attributes.categories!.data?.[0]
            ? product.attributes.categories!.data[0].attributes.name
            : 'Classic'
        }
        productName={product.attributes.name}
        productImageSrc={
          product.attributes.images.data?.[0]
            ? product.attributes.images.data[0].attributes.url
            : signIn
        }
        productPrice={product.attributes.price}
        key={product.id}
      />
    ));
  };

  if (products?.length > 3) {
    return <SearchSlider {...sliderSettings}>{mappingSearchSlides(products)}</SearchSlider>;
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
        {mappingSearchSlides(products)}
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
