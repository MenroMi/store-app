// basic
import router from 'next/router';
import { useState } from 'react';

// constants
import { Routes } from '@/constants/routes';

// layout
import Layout from '@/components/Layout/MainLayout';

// mui
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import theme from '@/utils/mui/theme';

// components
import ButtonLoader from '@/components/UI/Buttons/ButtonLoader/ButtonLoader';

// styles
import {
  CheckoutMessage,
  ContentContainer,
  CustomButton,
} from '@/styles/pageStyles/CheckoutStyles';

const Checkout = () => {
  const queryUpLg = useMediaQuery(theme.breakpoints.up('lg'));
  const queryUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);

  return (
    <Layout title="Checkout | Shop Store">
      <Box>
        <Grid>
          <ContentContainer
            container
            justifyContent="center"
            alignItems="self-start"
            flexWrap="wrap"
          >
            <CheckoutMessage>
              <Typography variant="h2">Thank you for purchase!</Typography>
              <Typography variant="h4">We are happy that you found shoes that fits you</Typography>
              <CustomButton
                variant="contained"
                onClick={async () => {
                  setIsRedirecting(true);
                  await router.push(Routes.search);
                }}
                sx={{ width: queryUpLg ? '400px' : queryUpSm ? '80%' : '100%' }}
              >
                {isRedirecting ? <ButtonLoader /> : 'Back to search'}
              </CustomButton>
            </CheckoutMessage>
          </ContentContainer>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Checkout;
