// basic
import { useRouter } from 'next/router';
import { Routes } from '@/constants';

// mui
import { Grid, Box, Typography } from '@mui/material';

// layouts
import SplitLayout from '@/components/Layout/SplitLayout/SplitLayout';
import Layout from '@/components/Layout/MainLayout';

// mock data
const mockData = {
  title: 'Error 404',
  description: "We can't find the page you are looking for. Sorry for the inconvenience.",
};

// styled components
import { CustomButton } from '@/styles/pageStyles/Error404Styles';

export default function Error404() {
  const router = useRouter();

  const handleGoBack = (): void => {
    router.back();
  };

  const handleGoHome = (): void => {
    router.push(Routes.search);
  };
  return (
    <Layout title="Page not found...">
      <SplitLayout>
        <Grid container justifyContent="center" alignItems="center" height="calc(100vh - 120px)">
          <Grid item container flexDirection="row" width="60%">
            <Typography variant="h2">{mockData.title}</Typography>
            <Typography variant="h5Gray" mt={2} mb={2}>
              {mockData.description}
            </Typography>
            <Box display="flex" gap={2}>
              <CustomButton variant="outlined" onClick={handleGoBack}>
                Go back
              </CustomButton>
              <CustomButton variant="contained" onClick={handleGoHome}>
                Home
              </CustomButton>
            </Box>
          </Grid>
        </Grid>
      </SplitLayout>
    </Layout>
  );
}
