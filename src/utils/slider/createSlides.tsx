import { IProduct } from '@/types/cardsSliderTypes';
import mappingDataForSlides from './mapSlides';
import { IProductAfterMapping } from '@/types/slideTypes';
import Slide from '@/components/UI/Slider/Slide/Slide';
import DropDownMenu from '@/components/UI/Menu/DropDownMenu/DropDownMenu';
import { Button, CircularProgress } from '@mui/material';
import { NextRouter } from 'next/router';
import { Routes } from '@/constants/routes';
import { Dispatch, SetStateAction } from 'react';
import SearchSlideDesktop from '@/components/UI/Slider/SearchSliderDesktop/SearchSlideDesktop/SearchSlideDesktop';

const onCreateSlides = (
  products: IProduct[],
  router?: NextRouter,
  setIsLoading?: Dispatch<SetStateAction<boolean>>,
  isLoading?: boolean
) => {
  return mappingDataForSlides(products)?.map((product) => {
    const { category, name, img, price, id, slider } = product as IProductAfterMapping;

    return router === undefined && slider === 2 ? (
      <Slide
        productCategory={category}
        productName={name}
        productImageSrc={img}
        productPrice={price}
        key={id}
        id={id}
      >
        <DropDownMenu productID={id} productName={name} />
      </Slide>
    ) : (
      <SearchSlideDesktop
        productCategory={category}
        productName={name}
        productImageSrc={img}
        productPrice={price}
        key={id}
        id={id}
      >
        <Button
          sx={{ position: 'relative' }}
          onClick={() => {
            setIsLoading!(true);
            router!.push(`${Routes.products}/${id}`);
          }}
        >
          {isLoading ? (
            <CircularProgress sx={{ height: '15px', width: '15px', color: 'white' }} />
          ) : (
            'See more'
          )}
        </Button>
      </SearchSlideDesktop>
    );
  });
};

export default onCreateSlides;
