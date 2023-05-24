import Layout from '@/components/Layout/MainLayout';
import { Grid, Button } from '@mui/material';
import { useState } from 'react';
import { CustomImage } from '@/components/UI/Cards/Card/CardStyles';
import { blurDataURL } from '@/constants/urls';
import { ONE_MOCKED_PRODUCT } from '@/constants/mockedData';

const products = Array(8).fill(undefined).map((_, idx) => ({
    ...ONE_MOCKED_PRODUCT,
    id: idx + 1,
}));


export default function SingleProductPage() {
    const [mainImageIndex, setMainImageIndex] = useState(0);

    const handleNextImage = () => {
        if (mainImageIndex < products.length - 1) {
            setMainImageIndex(mainImageIndex + 1);
        }
    };

    const handlePreviousImage = () => {
        if (mainImageIndex > 0) {
            setMainImageIndex(mainImageIndex - 1);
        }
    };

    return (
        <Layout title="Product">
            <Grid container paddingTop={12.5} paddingLeft={38} paddingRight={38} spacing={1.75}>
                <Grid container xs={6} maxHeight={628}>
                    <Grid item container xs={2} overflow='hidden' flexDirection='column' justifyContent='space-between'>
                        {products.slice(1).map((product, index) => (
                            <Grid item key={index} maxHeight={76}>
                                <CustomImage src={product.productImageSrc} alt={`Image ${index}`} blurDataURL={blurDataURL}/>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item xs={10}>
                        <CustomImage src={products[mainImageIndex].productImageSrc} alt="Main Image" width={588} blurDataURL={blurDataURL}/>
                        {/* <Button onClick={handlePreviousImage} disabled={mainImageIndex === 0}>
                            Назад
                        </Button>
                        <Button onClick={handleNextImage} disabled={mainImageIndex === products.length - 1}>
                            Вперёд
                        </Button> */}
                    </Grid>
                </Grid>
                <Grid container xs={6}>
                </Grid>
            </Grid>
        </Layout>
  );
};