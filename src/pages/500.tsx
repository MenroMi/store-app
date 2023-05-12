// basic
import { useRouter } from 'next/router';

// mui
import { Grid, Typography } from '@mui/material';

// image
import bgImage from '@/assets/error500big.png';

// layout
import Layout from '@/components/Layout/MainLayout';

// styled components
import {
  Description,
  ErrorMessage,
  CustomButton,
  BackgroundImage,
  ContentContainer,
} from '@/styles/pageStyles/Error500Styles';

// mock data
const mockData = {
  title: 'Oh snap!',
  description: 'We’re not quite sure what went wrong. You can go back home...',
};

export default function Error500() {
  const router = useRouter();

  const handleGoHome = (): void => {
    router.push('/');
  };
  return (
    <Layout title="Page not found...">
      <Grid container height={1} justifyContent="center">
        <BackgroundImage src={bgImage} alt="Background Image" />
        <Grid item>
          <ContentContainer
            container
            justifyContent="center"
            alignItems="self-start"
            flexWrap="wrap"
          >
            <ErrorMessage justifyContent="center" flexWrap="wrap">
              <Typography variant="h2">{mockData.title}</Typography>
              <Description variant="h5Gray">{mockData.description}</Description>
            </ErrorMessage>
            <CustomButton variant="contained" onClick={handleGoHome}>
              Back home
            </CustomButton>
          </ContentContainer>
        </Grid>
      </Grid>
    </Layout>
  );
}
