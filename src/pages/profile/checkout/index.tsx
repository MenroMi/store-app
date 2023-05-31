// next
import router from 'next/router';

// constants
import { Routes } from '@/constants/routes';

// layout
import Layout from '@/components/Layout/MainLayout';

// mui
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import theme from '@/utils/mui/theme';

// styles
import {
  CheckoutMessage,
  ContentContainer,
  CustomButton,
} from '@/styles/pageStyles/CheckoutStyles';
import ButtonLoader from '@/components/UI/Buttons/ButtonLoader/ButtonLoader';

export interface ICheckoutProps {
  loading?: boolean;
}

const Checkout = ({ loading }: ICheckoutProps) => {
  const queryUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  const handleSearch = (): void => {
    router.push(Routes.search);
  };

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
                onClick={handleSearch}
                disabled={loading && true}
                sx={{ width: queryUpSm ? '400px' : '80%' }}
              >
                {loading ? <ButtonLoader /> : 'Search for more'}
              </CustomButton>
            </CheckoutMessage>
          </ContentContainer>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Checkout;
