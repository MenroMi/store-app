import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton/SecondaryButton';
import { Divider, Grid, Stack, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';

const pages = ['Home', 'Add Product', 'Search'];
const links = ['/home', '/add-product', '/search-results'];

const Bag = () => {

  return (
    <>
      <Head>
        <title>Bag - Shoes Shop</title>
      </Head>

      {/* HEADER IS HERE */}

      <Grid container p={2}>
        <Box
          py={8}
          sx={{
            display: 'flex',
            width: '100%',
            maxWidth: '1528px',
            marginInline: 'auto',
          }}
        >
          {/* Left container */}
          <Box sx={{ width: '100%', maxWidth: '963px' }}>
            <Typography variant="h2">Chart</Typography>
            {/* Cards */}

            <Grid item xs={12} mt={5} sx={{ marginInline: 'auto' }}>
                {/* Here will be cards */}
              <Box
                sx={{
                  maxWidth: '432px',
                  marginInline: 'auto',
                  marginTop: '3rem',
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <PrimaryButton>Checkout</PrimaryButton>
              </Box>
            </Grid>
          </Box>

          {/* Summary - Right Container */}
          <Box
            sx={{
              marginLeft: 'auto',
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
              <Typography variant="h1">Summary</Typography>

              <Box sx={{ marginTop: '3rem' }} />

              <Typography>Do you have a promocode?</Typography>

              <Box
                sx={{
                  marginTop: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '.5rem',
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2">Subtotal</Typography>
                  <Typography variant="body2"></Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2">Shipping</Typography>
                  <Typography variant="body2"></Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2">
                    <Typography component="span" sx={{ color: 'text.secondary' }} variant="body2">
                    </Typography>
                  </Typography>
                  <Typography variant="body2">
                  </Typography>
                </Box>

                <Divider sx={{ marginBlock: '1rem' }} />

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontWeight: '500',
                  }}
                >
                  <Typography variant="body2">Total</Typography>
                  <Typography variant="body2">
                    
                  </Typography>
                </Box>

                <Divider sx={{ marginBlock: '1rem' }} />

                <SecondaryButton>PayPal</SecondaryButton>
                <PrimaryButton>Checkout</PrimaryButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Bag;
