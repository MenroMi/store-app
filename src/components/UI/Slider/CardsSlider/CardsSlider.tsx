// basic
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// mui
import { Button, Typography, Link as LinkMui, Box } from '@mui/material';

// components
import Card from '../../Cards/Card/Card';
import DropDownMenu from '../../Menu/DropDownMenu/DropDownMenu';

// styled components
import { CustomEmptyStateWrapper, CustomSlider } from './CardsSliderStyles';

// constants
import { Routes } from '@/constants/routes';
import SliderArrow from '../SliderArrow/SliderArrow';

// images
import noProducts from '@/assets/icons/no-products.svg';

// types
import { ICardsSliderProps } from '@/types/cardsSliderTypes';

export const CardsSlider = ({ products }: ICardsSliderProps) => {
  const sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    dots: true,
    arrows: true,
    touchMove: false,
    nextArrow: <SliderArrow />,
    prevArrow: <SliderArrow next={false} />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          touchMove: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          touchMove: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (products?.length > 4) {
    return (
      <CustomSlider {...sliderSettings}>
        {products?.map((product) => (
          <Card
            productCategory={product.categories[0].name}
            productName={product.name}
            productImageSrc={product?.images[0]?.url}
            productPrice={product.price}
            key={product.id}
          >
            <DropDownMenu productID={product.id} productName="nike" />
          </Card>
        ))}
      </CustomSlider>
    );
  } else if (products?.length > 0) {
    return (
      <Box sx={{ display: 'flex' }}>
        {products?.map((product) => (
          <Card
            productCategory={product.categories[0].name}
            productName={product.name}
            productImageSrc={product?.images[0]?.url}
            productPrice={product.price}
            key={product.id}
            marginRight="38px"
          >
            <DropDownMenu productID={product.id} productName="nike" />
          </Card>
        ))}
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
        <LinkMui component={Link} href={Routes.addProduct} sx={{ mt: 5 }} underline="none">
          <Button variant="contained" sx={{ padding: '10px 26px' }}>
            Add product
          </Button>
        </LinkMui>
      </CustomEmptyStateWrapper>
    );
  }
};
