// basic
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

// mui
import { Grid, Stack, Typography, Button, useTheme, Box, Theme } from '@mui/material';

// images
import productImage from '@/assets/singInBg.png';
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

// data
const MOCKED_PRODUCTS = [
  {
    id: 1,
    productImageSrc: productImage,
    productName: 'Nike Air Max 270',
    productPrice: 160,
    productCategory: "Women's shoes",
    inStock: true,
  },
  {
    id: 2,
    productImageSrc: productImage,
    productName: 'Nike Air Max 270',
    productPrice: 160,
    productCategory: "Women's shoes",
    inStock: true,
  },
  {
    id: 3,
    productImageSrc: productImage,
    productName: 'Nike Air Max 270',
    productPrice: 160,
    productCategory: "Women's shoes",
    inStock: true,
  },
  {
    id: 4,
    productImageSrc: productImage,
    productName: 'Nike Air Max 270',
    productPrice: 160,
    productCategory: "Women's shoes",
    inStock: true,
  },
];

const Bag = () => {
  const [subTotal, setSubTotal] = useState<number>(0);
  const [shipping, setShipping] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const {
    palette: {
      text: { caption },
    },
  } = useTheme<Theme>();

  const countSubTotal = () => {
    const priceArray = MOCKED_PRODUCTS.map(({ productPrice }) => productPrice);
    const countSubTotal = priceArray.reduce((value, acc) => value + acc);
    setSubTotal(countSubTotal);
  };

  const countShipping = () => {
    const currentShipping = MOCKED_PRODUCTS.length * 5;
    setShipping(currentShipping);
  };

  const countTax = () => {
    const currentTax = subTotal * 0.2;
    setTax(currentTax);
  };

  const countTotal = () => {
    const totalPrice = subTotal + shipping + tax;
    setTotal(totalPrice);
  };

  useEffect(() => {
    countSubTotal();
    countShipping();
    countTax();
  }, []);

  useEffect(() => {
    countTotal();
  }, []);

  return (
    <Layout title="Bag">
      <main style={{ marginTop: '80px' }}>
        <Head>
          <title>Bag</title>
        </Head>
        <Grid
          container
          p={2}
          sx={{
            padding: '0',
          }}
        >
          <CustomBagPageWrapper py={8}>
            {/* Left container */}
            <Box
              sx={{
                width: '100%',
                maxWidth: '963px',
              }}
            >
              <Typography variant="h2">Chart</Typography>
              <Grid item xs={12} mt={5} sx={{ marginTop: '55px' }}>
                <Stack spacing={16} mb={3}>
                  {MOCKED_PRODUCTS.map((product) => (
                    <ProductCardBag
                      productCategory={product.productCategory}
                      productImageSrc={product.productImageSrc}
                      productName={product.productName}
                      productPrice={product.productPrice}
                      key={product.id}
                      inStock={true}
                    />
                  ))}
                </Stack>
              </Grid>
            </Box>
            {/* Right Container */}
            <Box
              sx={{
                marginLeft: { lg: 'auto', md: '20px' },
              }}
            >
              <Box
                sx={{
                  width: '399px',
                  marginInline: 'auto',
                  textAlign: 'left',
                  display: { xs: 'none', md: 'block' },
                }}
              >
                <Typography variant="h2">Summary</Typography>
                <Button
                  sx={{
                    marginTop: '65px',
                    width: '285px',
                    justifyContent: 'space-between',
                    color: caption,
                    padding: '0',
                  }}
                >
                  <Typography variant="btnIconText" fontSize={20}>
                    Do you have a promocode?
                  </Typography>
                  <Box
                    component={Image}
                    src={DownIcon}
                    alt="down"
                    sx={{
                      top: '2px',
                      left: '8px',
                    }}
                  ></Box>
                </Button>
                <Box
                  sx={{
                    marginTop: '30px',
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
                    <CountBagComponent CountCategory={'Tax'} PriceValue={tax} />
                  </Box>
                  <CustomTotalSummaryWrapper>
                    <Typography variant="h3Bold">Total</Typography>
                    <Box sx={{ display: 'flex' }}>
                      <Typography variant="h3">$</Typography>
                      <Typography variant="h3">{total}</Typography>
                    </Box>
                  </CustomTotalSummaryWrapper>
                  <CustomBagBtnsWrapper>
                    <SecondaryButton>PayPal</SecondaryButton>
                    <PrimaryButton>Checkout</PrimaryButton>
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
