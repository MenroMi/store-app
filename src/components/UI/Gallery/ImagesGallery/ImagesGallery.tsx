import { blurDataURL } from '@/constants/urls';
import { IImageGalleryProps } from '@/types/productTypes';

import { CustomGalleryImageContainer, CustomGalleryImage, CustomIconButton } from './ImagesGalleryStyles';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';

import defImg from '@/assets/defImg.png';
import RightArraow from '@/assets/icons/right.svg';
import LeftArraow from '@/assets/icons/left.svg';

import { useState } from 'react';

export default function ImagesGallery({ images }: IImageGalleryProps) {
    const [mainImageIndex, setMainImageIndex] = useState<number>(0);

    const handleNextImage = () => {
        if (mainImageIndex < images.data?.length - 1) {
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
            {images.data 
            ? (<><Grid container item xs={1.6} overflow='hidden' display='flex' alignItems='start' flexDirection='column' gap={2}>
                {images.data.map((image, idx: number) => (
                    <CustomGalleryImageContainer item key={image?.id} position='relative'>
                        <CustomGalleryImage src={image?.attributes.url || defImg} onClick={() => selectImage(idx)} selected={idx === mainImageIndex} blurDataURL={blurDataURL} alt={`Shoe image ${idx+1}`} fill/>
                    </CustomGalleryImageContainer>
                ))}
            </Grid>
            <Grid container item xs={10}>
                <CustomGalleryImageContainer isMain={true} position='relative'>
                    <CustomGalleryImage src={images.data[mainImageIndex]?.attributes.url || defImg} alt="Main Image" blurDataURL={blurDataURL} priority={true} isMain={true} fill/>
                    <Box position='absolute' bottom={25} right={25}>
                        <CustomIconButton onClick={handlePreviousImage} disabled={mainImageIndex === 0}>
                            <Box component={Image} src={LeftArraow} alt="Previous image" width={6.5} height="auto"></Box>
                        </CustomIconButton>
                        <CustomIconButton onClick={handleNextImage} disabled={mainImageIndex === images.data.length - 1}>
                            <Box component={Image} src={RightArraow} alt="Next image" width={6.5} height="auto"></Box>
                        </CustomIconButton>
                    </Box>
                </CustomGalleryImageContainer> 
            </Grid></>)
            : (<Grid container item overflow='hidden'>
                    <CustomGalleryImageContainer isMain={true} position='relative'>
                        <CustomGalleryImage src={defImg} alt="Main Image" blurDataURL={blurDataURL} priority={true} isMain={true} fill/>
                    </CustomGalleryImageContainer>
                </Grid>)}
        </Grid>
    );
}