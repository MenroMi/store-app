// basic
import Image, { StaticImageData } from 'next/image';
import { useContext, useEffect, useState } from 'react';

// mui
import { Box, Typography, useTheme, Theme, useMediaQuery, Button } from '@mui/material';

// components
// import BagQuantityButton from '@/components/UI/Buttons/BagQuantityButton/BagQuantityButton';
// import BagDeleteButton from '@/components/UI/Buttons/BagDeleteButton/BagDeleteButton';

// styled components
import { CustomBagWrapper, CustomBox } from './styles';

// context
import { useShoppingCart } from '@/contexts/shoppingCardContext';

import { AttrFromData } from '@/types/cardListTypes';
import axios from 'axios';
import { baseURL } from '@/constants';
import { QueryClient, dehydrate, useMutation, useQuery } from '@tanstack/react-query';
// import { getProductById } from '@/services/cardBagService';
import BagQuantityButton from '../../Buttons/BagQuantityButton/BagQuantityButton';
import BagDeleteButton from '../../Buttons/BagDeleteButton/BagDeleteButton';
import { CustomImage } from '../Card/CardStyles';
import singInImg from '@/assets/singInBg.png';
import { getProductById, getProductPriceById } from '@/services/cardBagService';
import queryClient from '@/components/Providers/queryClient';

// interface
export type CartItemProps = {
  id: number;
  // quantity: number;
  productCategory: string;
  productImageSrc: StaticImageData | string;
  productName: string;
  productPrice: number;
};

  const CardBag = ({
    id,
    // quantity,
    productCategory,
    productImageSrc,
    productName,
    productPrice
  }: CartItemProps) => {
  const { cartItems } = useShoppingCart();
  const theme = useTheme<Theme>();
  const queryUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  // const getProductById = async (id: number) => {
  //   return await axios.get(`${baseURL}/products/${id}`).then((response) => response?.data?.data);
  // };

  const keyStr =
    'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8lxJXDwAGaQJBAQNgCgAAAABJRU5ErkJggg==';

  // const item = cartItems.find((i) => i.id === id);

  // const { data } = useQuery(['id', item?.id!], () => getProductById(id));

  return (
    <>
      <CustomBagWrapper
        sx={{
          minHeight: queryUpSm ? '244px' : '121px',
          padding: queryUpSm ? '15px' : '10px',
          '&:hover': {
            boxShadow: 4,
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: queryUpSm ? '223px' : '104px',
          }}
        >
          <Box
            sx={{
              borderRadius: '6px',
              maxWidth: queryUpSm ? '223px' : '104px',
              maxHeight: queryUpSm ? '214px' : '101px',
            }}
          >
            <CustomImage
              src={productImageSrc}
              alt="product template"
              priority={true}
              placeholder="blur"
              blurDataURL={keyStr}
              width={223}
              height={214}
              sx={{
                maxWidth: queryUpSm ? '223px' : '104px',
                maxHeight: queryUpSm ? '214px' : '101px',
              }}
            />
          </Box>
        </Box>
        <CustomBox
          sx={{
            flexDirection: 'column',
            marginLeft: queryUpSm ? '25px' : '20px',
          }}
        >
          <CustomBox>
            <Box
              sx={{
                width: '100%',
              }}
            >
              <Typography variant="h3">{productName}</Typography>
              <Typography variant="h5">{productCategory}</Typography>
              <Typography
                variant="h4Warning"
                sx={{
                  marginTop: '10px',
                }}
              >
                In Stock
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3">{productPrice}$</Typography>
            </Box>
          </CustomBox>
          <CustomBox
            sx={{
              maxHeight: { sm: '28px', xs: '20px' },
            }}
          >
            <BagQuantityButton id={id} />
            <BagDeleteButton id={id} />
          </CustomBox>
        </CustomBox>
      </CustomBagWrapper>
    </>
  );
};

export default CardBag;
