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
import { reducePrice } from '@/utils/price/reducePrice';

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
import { CardBagContextType, ICardBagProps } from '@/types/productCardBag';
import { BagContext } from '@/contexts/bagContext';

const BagPage = () => {
  const queryUpLg = useMediaQuery(theme.breakpoints.up('lg'));
  const queryUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  const context = useContext(BagContext) as CardBagContextType;

  const [subTotal, setSubTotal] = useState<number>(0);
  const shipping: number = subTotal === 0 ? 0 : 10;
  const {
    palette: {
      text: { caption },
    },
  } = useTheme<Theme>();

  useEffect(() => {
    setSubTotal(reducePrice(context?.products));
  }, [context?.products]);

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
                  {context?.products.map((product: ICardBagProps) => (
                    <ProductCardBag
                      key={product.id}
                      product={product}
                      deleteProduct={context.deleteProduct}
                      changeQuantity={context.changeQuantity}
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

export default BagPage;
