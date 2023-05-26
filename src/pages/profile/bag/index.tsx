// basic
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

// mui
import {
  Grid,
  Stack,
  Typography,
  Button,
  useTheme,
  Box,
  Theme,
  useMediaQuery,
} from '@mui/material';
import theme from '@/utils/mui/theme';
import { reducePrice } from '@/utils/reducePrice';

// images
import DownIcon from '@/assets/icons/down.svg';

// layout
import Layout from '@/components/Layout/MainLayout';

// components
import ProductCardBag from '@/components/UI/Cards/ProductCardBag/ProductCardBag';
import CountBagComponent from '@/components/UI/CountBagComponent/CountBagComponent';
import PrimaryButton from '@/components/UI/Buttons/PrimaryButton/PrimaryButton';
import SecondaryButton from '@/components/UI/Buttons/SecondaryButton/SecondaryButton';

// styled components
import {
  CustomBagPageWrapper,
  CustomTotalSummaryWrapper,
  CustomBagBtnsWrapper,
} from '@/styles/pageStyles/BagStyles';

// interface
// import { CardBagContextType, ICardBagProps } from '@/types/productCardBag';
// import { BagContext, CardBagContextType, ICardBagProps } from '@/context/bagContext';
import { CustomButton } from '@/styles/pageStyles/CheckoutStyles';
import router from 'next/router';
import { Routes, baseURL } from '@/constants';
import ButtonLoader from '@/components/UI/Buttons/ButtonLoader/ButtonLoader';


// interface
// import { BagContextProvider } from '@/context/bagContext';
import { ShoppingCartProvider, useShoppingCart } from '@/context/ShoppingCartContext';
import CardBag from '@/components/UI/Cards/ProductCardBag/CardBag';
import axios from 'axios';
import { AttrFromData } from '@/types/cardListTypes';
import { QueryClient, dehydrate, useMutation, useQuery } from '@tanstack/react-query';
// export interface IBagProps {
//   loading?: boolean;
// }

const Bag = () => {
  const queryUpLg = useMediaQuery(theme.breakpoints.up('lg'));
  const queryUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  // const { data: id } = useQuery(['id'], () => getProductPriceById(id));

  const { cartItems } = useShoppingCart();

  const [subTotal, setSubTotal] = useState<number>(0);


  // useEffect(() => {
  //   setSubTotal(
  //     cartItems.reduce((total, cartItem) => {
  //       const item = cartItems.find((i) => i.id === cartItem.id);
  //       return total + (item?.productPrice || 0) * cartItem.quantity;
  //     }, 0)
  //   );
  // }, [cartItems]);

  // useEffect(() => {
  //   const reducePrice = (array: any) =>
  //     array.reduce((acc: number, elem: AttrFromData) => acc + elem.productPrice * elem.quantity, 0);
  //   setSubTotal(reducePrice(cartItems));
  // }, [cartItems]);

  const shipping: number = subTotal === 0 ? 0 : 10;
  const {
    palette: {
      text: { caption },
    },
  } = useTheme<Theme>();

  console.log(cartItems);

  const handleCheckout = (): void => {
    router.push(Routes.checkout);
  };
  return (
    <Layout title="Bag">
      <main style={{ marginTop: '80px', width: '100%' }}>
        <Grid
          container
          p={2}
          sx={{
            padding: '0',
          }}
        >
          <CustomBagPageWrapper py={8} sx={{ flexDirection: queryUpLg ? 'row' : 'column' }}>
            {/* Left container */}
            <Box
              sx={{
                width: '100%',
              }}
            >
              <Typography variant="h2" sx={{ marginLeft: '15px' }}>
                Chart
              </Typography>
              <Grid item xs={12} mt={5} sx={{ marginTop: '55px' }}>
                <Stack spacing={{ xl: 16, lg: 12, md: 10, sm: 8, xs: 4 }} mb={3}>
                  {cartItems ? (
                    cartItems.map((product) => (
                      <CardBag key={product.id} id={product.id} quantity={product.quantity} />
                    ))
                  ) : (
                    <Typography variant="h2" sx={{ marginLeft: '15px' }}>
                      NOTHING is here
                    </Typography>
                  )}
                </Stack>
              </Grid>
            </Box>
            {/* Right Container */}
            <Box
              sx={{
                marginLeft: queryUpLg ? '80px' : queryUpSm ? '20px' : '0',
                marginRight: queryUpSm ? '20px' : '0',
              }}
            >
              <Box
                sx={{
                  minWidth: queryUpLg ? '399px' : 'auto',
                  marginInline: 'auto',
                  textAlign: 'left',
                }}
              >
                <Typography variant="h2">Summary</Typography>
                <Box
                  sx={{
                    marginTop: queryUpLg ? '65px' : '20px',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '20px',
                      marginBottom: '56px',
                    }}
                  >
                    <CountBagComponent CountCategory={'Subtotal'} PriceValue={subTotal} />
                    <CountBagComponent CountCategory={'Shipping'} PriceValue={shipping} />
                    <CountBagComponent
                      CountCategory={'Tax'}
                      PriceValue={subTotal === 0 ? 0 : Math.floor(subTotal * 0.13)}
                    />
                  </Box>
                  <CustomTotalSummaryWrapper>
                    <Typography variant="h3Bold">Total</Typography>
                    <Box sx={{ display: 'flex' }}>
                      <Typography variant="h3">$</Typography>
                      <Typography variant="h3">
                        {subTotal === 0 ? 0 : subTotal + shipping + Math.floor(subTotal * 0.13)}
                      </Typography>
                    </Box>
                  </CustomTotalSummaryWrapper>
                  <CustomBagBtnsWrapper>
                    <CustomButton
                      variant="contained"
                      onClick={handleCheckout}
                      sx={{
                        width: queryUpSm ? '400px' : '80%',
                      }}
                    >
                      Checkout
                    </CustomButton>
                  </CustomBagBtnsWrapper>
                </Box>
              </Box>
            </Box>
          </CustomBagPageWrapper>
        </Grid>
      </main>
    </Layout>
  );
};

export default Bag;
