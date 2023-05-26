import { blurDataURL } from '@/constants/urls';
import RightArraow from '@/assets/icons/right.svg';
import LeftArraow from '@/assets/icons/left.svg';

import { Box, Grid } from '@mui/material';
import Image from 'next/image';

import { useState } from 'react';
import { CustomGalleryImageContainer, CustomGalleryImage, CustomIconButton } from './ImagesGalleryStyles';

// mock
import productImage from '@/assets/singInBg.png';
import productImage2 from '@/assets/singUpBg.png';
const products = Array(7).fill(undefined).map((_, idx) => ({
    id: idx + 1,
    productImageSrc: idx % 2 ? productImage : productImage2
}));

export default function ImagesGallery() {
    const [mainImageIndex, setMainImageIndex] = useState<number>(0);

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

    const selectImage = (idx: number) => {
        setMainImageIndex(idx);
    }

    return (
        <Grid container item xs={6.3} maxHeight={628}>
            <Grid container item xs={1.6} overflow='hidden'>
                {products.map((product, idx) => (
                    <CustomGalleryImageContainer item key={idx}>
                        <CustomGalleryImage src={product.productImageSrc} onClick={() => selectImage(idx)} selected={idx === mainImageIndex} blurDataURL={blurDataURL} alt={`Shoe image ${idx+1}`}/>
                    </CustomGalleryImageContainer>
                ))}
            </Grid>
            <Grid container item xs={10}>
                <CustomGalleryImageContainer isMain={true} position='relative'>
                    <CustomGalleryImage src={products[mainImageIndex].productImageSrc} alt="Main Image" blurDataURL={blurDataURL} priority={true} isMain={true}/>
                    <Box position='absolute' bottom={25} right={25}>
                        <CustomIconButton onClick={handlePreviousImage} disabled={mainImageIndex === 0}>
                            <Box component={Image} src={LeftArraow} alt="Previous image" width={6.5} height="auto"></Box>
                        </CustomIconButton>
                        <CustomIconButton onClick={handleNextImage} disabled={mainImageIndex === products.length - 1}>
                            <Box component={Image} src={RightArraow} alt="Next image" width={6.5} height="auto"></Box>
                        </CustomIconButton>
                    </Box>   
                </CustomGalleryImageContainer> 
            </Grid>
        </Grid>
    );
}