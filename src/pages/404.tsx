import { Grid, Button, styled, Box, Typography } from "@mui/material";
import Image from "next/image";
import error404Img from '../assets/error404.png';
import { useRouter } from 'next/router';

const mockData = {
    title: 'Error 404',
    description: "We can't find the page you are looking for. Sorry for the inconvenience."
}

const CustomButton = styled(Button)({       
    width: '152px',
    marginTop: '8px'
});

export default function Error404() {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    const handleGoHome = () => {
        router.push('/');
    };
    return (
        <Grid container height={1}>
            <Grid item sm={6}>
                <Grid container justifyContent="center" alignItems='center' height={1}>
                    <Grid item container flexDirection='row' width='60%'>
                        <Typography variant="h2">{mockData.title}</Typography>
                        <Typography variant="h5Gray" mt={2} mb={2}>{mockData.description}</Typography>
                        <Box sx={{ display: 'flex', gap: '16px' }}>
                            <CustomButton variant="outlined" onClick={handleGoBack}>Go back</CustomButton>
                            <CustomButton variant="contained" onClick={handleGoHome}>Home</CustomButton>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sm={6} position='relative'>
                <Image src={error404Img} alt='Error 404 Page Not Found' fill style={{ objectFit: 'cover', zIndex: 1000 }}/>
            </Grid>
        </Grid>
    );
}