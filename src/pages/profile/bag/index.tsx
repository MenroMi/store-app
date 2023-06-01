// basic
import { useEffect, useState } from 'react';

// mui
import { Grid, Stack, Typography, Box, useMediaQuery } from '@mui/material';
import theme from '@/utils/mui/theme';

// images
import singInImg from '@/assets/singInBg.png';

// layout
import Layout from '@/components/Layout/MainLayout';

// components
import CountBagComponent from '@/components/UI/CountBagComponent/CountBagComponent';
import CardBag from '@/components/UI/Cards/ProductCardBag/CardBag';
import EmptyStateCardBag from '@/components/UI/EmptyStateCardBag/EmptyStateCardBag';
import Notification from '@/components/UI/Notification/Notificaton';

// styled components
import {
  CustomBagPageWrapper,
  CustomTotalSummaryWrapper,
  CustomBagBtnsWrapper,
} from '@/styles/pageStyles/BagStyles';
import { CustomButton } from '@/styles/pageStyles/CheckoutStyles';

// context
import { useShoppingCart } from '@/contexts/shoppingCardContext';

// router
import router from 'next/router';
import { Routes } from '@/constants/routes';

// interface
import { AttrFromData } from '@/types/cardListTypes';

const Bag = () => {
  const queryUpLg = useMediaQuery(theme.breakpoints.up('lg'));
  const queryUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  const { data, cartQuantity, isFetched, value, clearCart } = useShoppingCart();

  const [subTotal, setSubtotal] = useState<number>(0);

  useEffect(() => {
    const summary = data?.reduce((total, cartItem) => {
      const item = data.find((i) => i.id === cartItem.id);
      const cartsItem = value.find((i) => i.id === cartItem.id);
      return total + (item?.attributes?.price || 0) * cartsItem?.quantity!;
    }, 0);
    summary && setSubtotal(summary);
  }, [data, value]);

  const shipping: number = subTotal === 0 ? 0 : 10;

  const handleCheckout = (): void => {
    router.push(Routes.checkout);
    clearCart();
  };

  return (
    <Layout title="Bag | Shop Store">
      <section style={{ marginTop: queryUpLg ? '65px' : '20px', width: '100%' }}>
        {cartQuantity > 0 ? (
          <Grid container p={2}>
            <CustomBagPageWrapper py={8} sx={{ flexDirection: queryUpLg ? 'row' : 'column' }}>
              {/* Left container */}
              <Box
                sx={{
                  width: queryUpLg ? '100%' : 'auto',
                  marginLeft: '20px',
                  marginRight: queryUpLg ? '0' : '20px',
                }}
              >
                <Typography variant="h2">Chart</Typography>
                <Grid item xs={12} mt={5} sx={{ marginTop: queryUpLg ? '55px' : '20px' }}>
                  <Stack spacing={{ xl: 16, lg: 12, md: 10, sm: 8, xs: 4 }} mb={3}>
                    {data?.map(
                      ({
                        id,
                        attributes: {
                          name,
                          price,
                          images: { data: imagesData },
                          gender: { data: genderData },
                        },
                      }: AttrFromData) => (
                        <CardBag
                          key={id}
                          id={id}
                          productCategory={
                            genderData
                              ? genderData.id === 3
                                ? "Men's Shoes"
                                : "Women's Shoes"
                              : ''
                          }
                          productImageSrc={
                            imagesData
                              ? imagesData[0]
                                ? imagesData[0].attributes.url
                                : singInImg
                              : singInImg
                          }
                          productName={name}
                          productPrice={price}
                        />
                      )
                    )}
                  </Stack>
                </Grid>
              </Box>
              {/* Right Container */}
              <Box
                sx={{
                  marginLeft: queryUpLg ? '80px' : queryUpSm ? '20px' : '20px',
                  marginRight: queryUpSm ? '20px' : '20px',
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
        ) : (
          <Box>
            <EmptyStateCardBag />
          </Box>
        )}
        <Notification />
      </section>
    </Layout>
  );
};

export default Bag;
