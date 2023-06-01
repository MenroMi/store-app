import { ICardsSliderProps, ICategory, IProduct } from '@/types/cardsSliderTypes';
import SliderArrow from './SliderArrow/SliderArrow';
import { StaticImageData } from 'next/image';
import signIn from '@/assets/singInBg.png';
import DropDownMenu from '../Menu/DropDownMenu/DropDownMenu';
import Slide from './Slide/Slide';
import { blurDataURL } from '@/constants/urls';
import { IImageAttribute, IProductAfterMapping } from '@/types/slideTypes';
import { Routes } from '@/constants/routes';
import { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import mappingDataForSlides from '@/utils/slider/mapSlides';

export const CardsSlider = ({
  products,
  deleteProduct,
  additionalOptions,
  isRedirecting,
  setIsRedirecting,
  router,
}: ICardsSliderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sliderSettings = {
    nextArrow: <SliderArrow />,
    prevArrow: <SliderArrow next={false} />,
    ...additionalOptions,
  };

  const onCreateSlides = () => {
    mappingDataForSlides(products)?.map((product) => {
      const { category, name, img, price, id, restThings, slider } =
        product as IProductAfterMapping;

      return (
        <Slide
          productCategory={category}
          productName={name}
          productImageSrc={img}
          productPrice={price}
          key={id}
          id={id}
          boxStyle={restThings?.box}
          imgAttr={restThings?.image}
        >
          {slider === 2 ? (
            <DropDownMenu productID={id} productName={name} />
          ) : (
            <Button
              sx={{ position: 'relative' }}
              onClick={() => {
                setIsLoading(true);
                router.push(`${Routes.products}/${id}`);
              }}
            >
              {isLoading ? (
                <CircularProgress sx={{ height: '15px', width: '15px', color: 'white' }} />
              ) : (
                'See more'
              )}
            </Button>
          )}
        </Slide>
      );
    });
  };

  if (products?.length > 3) {
    return (
      <>
        <CustomSlider {...sliderSettings}>{mappingSearchSlides(products)}</CustomSlider>

        <ModalDeleteItem
          deleteMessage="Are you sure to delete selected item?"
          deleteHandler={deleteProduct}
        />
      </>
    );
  } else if (products?.length > 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '38px',
          flexWrap: 'wrap',
        }}
      >
        {products?.map((product) => (
          <Card
            productCategory={product.categories[0].name}
            productName={product.name}
            productImageSrc={product?.images[0]?.url}
            productPrice={product.price}
            key={product.id}
          >
            <DropDownMenu productID={product.id} productName={product.name} />
          </Card>
        ))}
        <ModalDeleteItem
          deleteMessage="Are you sure to delete selected item?"
          deleteHandler={deleteProduct}
        />
      </Box>
    );
  } else {
    return (
      <CustomEmptyStateWrapper>
        <Image src={noProducts} alt="No products" />
        <Typography variant="h5" sx={{ mt: '10px' }}>
          You don’t have any products yet
        </Typography>
        <Typography variant="body1" sx={{ mt: '10px' }}>
          Post can contain video, images and text.
        </Typography>
        <Button
          variant="contained"
          onClick={async () => {
            setIsRedirecting(true);
            await router.push(Routes.addProduct);
          }}
          disabled={isRedirecting}
          sx={{ padding: '5px 13px', mt: 2.5, width: '146px' }}
        >
          {isRedirecting ? <ButtonLoader /> : 'Add product'}
        </Button>
      </CustomEmptyStateWrapper>
    );
  }
};
