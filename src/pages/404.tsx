import { Grid, Button, styled, Box, Typography } from "@mui/material";
import { useRouter } from 'next/router';
import Head from 'next/head';
import SplitLayout from '@/components/SplitLayout';
import Layout from '@/components/Layout';

const mockData = {
    title: 'Error 404',
    description: "We can't find the page you are looking for. Sorry for the inconvenience."
}

const CustomButton = styled(Button)({       
    width: '152px',
    marginTop: '8px',
    padding: 5,
});

export default function Error404() {
    const router = useRouter();

    const handleGoBack = () : void => {
        router.back();
    };

    const handleGoHome = () : void => {
        router.push('/');
    };
    return (
        // <Layout title='Page not found...'>
            <SplitLayout>
                <Grid container justifyContent="center" alignItems='center' height={1}>
                    <Grid item container flexDirection='row' width='60%'>
                        <Typography variant="h2">{mockData.title}</Typography>
                        <Typography variant="h5Gray" mt={2} mb={2}>{mockData.description}</Typography>
                        <Box display='flex' gap={2}>
                            <CustomButton variant="outlined" onClick={handleGoBack}>Go back</CustomButton>
                            <CustomButton variant="contained" onClick={handleGoHome}>Home</CustomButton>
                        </Box>
                    </Grid>
                </Grid>
            </SplitLayout>
        // </Layout>
    );
}