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
import { searchSliderOptionsOnMobile } from '@/constants/ui';

// styled components
import { CustomEmptyStateWrapper } from '@/components/UI/Slider/CardsSlider/CardsSliderStyles';
import { AttrFromData } from '@/types/cardListTypes';
import Slider from 'react-slick';
import SearchSlideMobile from '../SearchSlideMobile/SearchSlideMobile';

// interface
interface ISearchHeaderSliderProps {
  products: AttrFromData[];
}

const SearchSliderMobile: React.FC<ISearchHeaderSliderProps> = ({ products }): JSX.Element => {
  const mappingSearchSlides = (products: AttrFromData[]) => {
    return products?.map((product: AttrFromData) => (
      <SearchSlideMobile
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
        id={product.id}
      />
    ));
  };

  if (products?.length > 3) {
    return (
      <Box sx={{ order: 3 }}>
        <Slider {...searchSliderOptionsOnMobile}>{mappingSearchSlides(products)}</Slider>
      </Box>
    );
  } else if (products?.length > 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          order: 2,
        }}
      >
        {mappingSearchSlides(products)}
      </Box>
    );
  } else {
    return (
      <CustomEmptyStateWrapper sx={{ flex: '1', alignSelf: 'center', order: 3 }}>
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

export default SearchSliderMobile;
