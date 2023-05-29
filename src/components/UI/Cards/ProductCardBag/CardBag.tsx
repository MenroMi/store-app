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

// interface
type CartItemProps = {
  id: number;
  quantity: number;
};

const CardBag = ({ id, quantity }: CartItemProps) => {
  // const { name, price, gender } = attributes;
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity, getItemQuantity, cartItems } =
    useShoppingCart();
  const theme = useTheme<Theme>();
  const queryUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  // const { data: any } = useQuery(['id'], () => getProductById(id));

  const [resProduct, setResProduct] = useState<AttrFromData>();

  // const quantity = getItemQuantity(id);

  const item = cartItems.find((i) => i.id === id);
  // if (item == null) return null;

  // async function showArrayFromStorage(id: number) {
  //   let newList: AttrFromData = await axios
  //     .get(`${baseURL}products/${id}`)
  //     .then((res) => res.data.data);
  //   return newList;
  // }

  // const product: any = showArrayFromStorage(item.id).then((res) => console.log(res));
  // console.log(product);

  useEffect(() => {
    async function showArrayFromStorage(id: number) {
      let newList: any = await axios.get(`${baseURL}products/${id}`);
      // console.log(newList.data.data);
      setResProduct(newList.data.data);
    }
    showArrayFromStorage(item!.id);
    // async function getProductPriceById(id: number) {
    //   let newList: any = await axios.get(`${baseURL}products/${id}`);
    //   console.log(newList.data.data.attributes.price);
    // }
  }, []);

  // console.log(resProduct);

  // const product: any = showArrayFromStorage(item.id);
  // console.log(product);
  // const resProduct: AttrFromData = product.data.data;
  // console.log(resProduct);

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
            component={Image}
            src={singInImg}
            priority={true}
            alt="Product"
            sx={{
              borderRadius: '6px',
              maxWidth: queryUpSm ? '223px' : '104px',
              maxHeight: queryUpSm ? '214px' : '101px',
            }}
          ></Box>
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
              <Typography variant="h3">{resProduct?.attributes.name}</Typography>
              <Typography variant="h5">
                {resProduct?.attributes?.gender?.data?.id === 3 ? "Men's Shoes" : "Women's Shoes"}
              </Typography>
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
              <Typography variant="h3">{resProduct?.attributes.price}$</Typography>
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
