import { blurDataURL } from '@/constants/urls';
import RightArraow from '@/assets/icons/right.svg';
import LeftArraow from '@/assets/icons/left.svg';

import { Box, Grid } from '@mui/material';
import Image from 'next/image';

import { useState } from 'react';
import { CustomGalleryImageContainer, CustomGalleryImage, CustomIconButton } from './ImagesGalleryStyles';

export default function ImagesGallery({images} : any) {
    const [mainImageIndex, setMainImageIndex] = useState<number>(0);

    const handleNextImage = () => {
        if (mainImageIndex < images?.length - 1) {
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
            <Grid container item xs={1.6} overflow='hidden' display='flex' alignItems='start' flexDirection='column' gap={2}>
                {images?.map((image: any, idx: number) => (
                    <CustomGalleryImageContainer item key={image.id} position='relative'>
                        <CustomGalleryImage src={image.attributes.url} onClick={() => selectImage(idx)} selected={idx === mainImageIndex} blurDataURL={blurDataURL} alt={`Shoe image ${idx+1}`} fill/>
                    </CustomGalleryImageContainer>
                ))}
            </Grid>
            <Grid container item xs={10}>
                <CustomGalleryImageContainer isMain={true} position='relative'>
                    <CustomGalleryImage src={images && images[mainImageIndex].attributes.url} alt="Main Image" blurDataURL={blurDataURL} priority={true} isMain={true} fill/>
                    <Box position='absolute' bottom={25} right={25}>
                        <CustomIconButton onClick={handlePreviousImage} disabled={mainImageIndex === 0}>
                            <Box component={Image} src={LeftArraow} alt="Previous image" width={6.5} height="auto"></Box>
                        </CustomIconButton>
                        <CustomIconButton onClick={handleNextImage} disabled={mainImageIndex === images?.length - 1}>
                            <Box component={Image} src={RightArraow} alt="Next image" width={6.5} height="auto"></Box>
                        </CustomIconButton>
                    </Box>   
                </CustomGalleryImageContainer> 
            </Grid>
        </Grid>
    );
}