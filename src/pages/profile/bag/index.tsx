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
import { ICardBagProps } from '@/types/productCardBag';

// data
const MOCKED_PRODUCTS = [
  {
    id: 1,
    productImageSrc: productImage,
    productName: 'Nike Air Max 270',
    productPrice: 160,
    productCategory: "Women's shoes",
    inStock: true,
    quantity: 1,
  },
  {
    id: 2,
    productImageSrc: productImage,
    productName: 'Nike Air Max 270',
    productPrice: 160,
    productCategory: "Women's shoes",
    inStock: true,
    quantity: 1,
  },
  {
    id: 3,
    productImageSrc: productImage,
    productName: 'Nike Air Max 270',
    productPrice: 160,
    productCategory: "Women's shoes",
    inStock: true,
    quantity: 1,
  },
  {
    id: 4,
    productImageSrc: productImage,
    productName: 'Nike Air Max 270',
    productPrice: 160,
    productCategory: "Women's shoes",
    inStock: true,
    quantity: 1,
  },
];

const Bag = () => {
  const queryUpLg = useMediaQuery(theme.breakpoints.up('lg'));
  const queryUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  const [subTotal, setSubTotal] = useState<number>(0);
  const [shipping, setShipping] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [products, setProducts] = useState<ICardBagProps[]>(MOCKED_PRODUCTS);
  const {
    palette: {
      text: { caption },
    },
  } = useTheme<Theme>();

  const countSubTotal = () => {
    const priceArray: number[] = MOCKED_PRODUCTS.map(({ productPrice }) => productPrice * quantity);
    const countSubTotal: number = priceArray.reduce((value, acc) => value + acc);
    setSubTotal(countSubTotal);
  };

  const countShipping = () => {
    const currentShipping: number = MOCKED_PRODUCTS.length < 4 ? MOCKED_PRODUCTS.length * 5 : 20;
    setShipping(currentShipping);
  };

  const countTax = () => {
    const currentTax: number = subTotal * 0.2;
    setTax(currentTax);
  };

  const countTotal = () => {
    const totalPrice: number = subTotal + shipping + tax;
    setTotal(totalPrice);
  };

  const addProduct = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const removeProduct = () => {
    setQuantity((quantity) => quantity - 1);
    if (quantity <= 1) {
      setQuantity(1);
    }
  };

  const deleteProduct = () => {
    const newArray: any = products.pop();
    setProducts(newArray);
  };

  useEffect(() => {
    countSubTotal();
  }, [products]);

  useEffect(() => {
    countShipping();
  }, []);

  useEffect(() => {
    countTax();
  }, []);

  useEffect(() => {
    countTotal();
  }, []);

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
              <Typography variant="h2" sx={{ marginLeft: '15px' }}>
                Chart
              </Typography>
              <Grid item xs={12} mt={5} sx={{ marginTop: '55px' }}>
                <Stack spacing={{ xl: 16, lg: 12, md: 10, sm: 8, xs: 4 }} mb={3}>
                  {products.map((product: any) => (
                    <ProductCardBag
                      productCategory={product.productCategory}
                      productImageSrc={product.productImageSrc}
                      productName={product.productName}
                      productPrice={product.productPrice}
                      key={product.id}
                      inStock={true}
                      // quantity={quantity}
                      addProduct={addProduct}
                      removeProduct={removeProduct}
                      deleteProduct={deleteProduct}
                      id={product.id}
                      initialQuantity={1}
                    />
                  ))}
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
