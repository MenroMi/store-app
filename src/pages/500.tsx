import { Grid, Button, styled, Typography, useTheme, Stack } from "@mui/material";
import Image from "next/image";
import { useRouter } from 'next/router';
import bgImage from '@/assets/error500big.png';

const mockData = {
    title: 'Oh snap!',
    description: "We can't find the page you are looking for. Sorry for the inconvenience."
}

const Description = styled(Typography)(({theme}) => ({
    marginTop: 12,
    marginBottom: 40,
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.between("xs", "sm")]: {
        fontSize: 12,
    },
}));

const ErrorMessage = styled(Stack)(({theme}) => ({
    width: '100%',
    textAlign: 'center',
    zIndex: 1,
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.between("xs", "sm")]: {
        width: '80%',
    },
}));

const CustomButton = styled(Button)(({theme}) => ({       
    width: '280px',
    marginTop: '8px',
    [theme.breakpoints.between("xs", "sm")]: {
        width: '230px',
        alignSelf: 'flex-end'
    },
}));

const BackgroundImage = styled(Image)({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    objectFit: 'cover',
});

const ContentContainer = styled(Grid)(({theme}) => ({
    paddingTop: '135px',
    paddingBottom: '40px',
    [theme.breakpoints.between("xs", "sm")]: {
        height: '100%',
    },
}));

export default function Error500() {
    const router = useRouter();

    const handleGoHome = () => {
        router.push('/');
    };
    return (
        <Grid container height={1} justifyContent='center'>
            <BackgroundImage src={bgImage} alt="Background Image" />
            <Grid item>
                <ContentContainer container justifyContent="center" alignItems='self-start' flexWrap='wrap'>
                    <ErrorMessage justifyContent='center' flexWrap='wrap'>
                        <Typography variant="h2">{mockData.title}</Typography>
                        <Description variant="h5Gray">{mockData.description}</Description>
                    </ErrorMessage>
                    <CustomButton variant="contained" onClick={handleGoHome}>Back home</CustomButton>
                </ContentContainer>
            </Grid>
        </Grid>
    );
}