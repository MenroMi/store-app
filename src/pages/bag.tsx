// basic
import { useEffect, useState } from 'react';
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

  const queryUpLg = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Layout title="Bag ">
      <main style={{ marginTop: '80px', width: '100%' }}>
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
          <CustomBagPageWrapper py={8} sx={{ flexDirection: queryUpLg ? 'row' : 'column' }}>
            {/* Left container */}
            <Box
              sx={{
                width: '100%',
              }}
            >
              <Typography variant="h2">Chart</Typography>
              <Grid item xs={12} mt={5} sx={{ marginTop: '55px' }}>
                <Stack spacing={{ xl: 16, lg: 12, md: 10, sm: 8, xs: 4 }} mb={3}>
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
                marginLeft: queryUpLg ? '80px' : '20px',
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
                <Button
                  sx={{
                    marginTop: queryUpLg ? '65px' : '20px',
                    maxWidth: '285px',
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
                      marginLeft: '8px',
                      width: { xs: '10px' },
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
