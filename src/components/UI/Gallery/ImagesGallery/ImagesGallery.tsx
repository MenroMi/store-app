import { blurDataURL } from '@/constants/urls';
import { IImageGalleryProps } from '@/types/productTypes';

import {
  CustomGalleryImageContainer,
  CustomGalleryImage,
  CustomIconButton,
} from './ImagesGalleryStyles';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';

import defImg from '@/assets/defImg.png';
import RightArraow from '@/assets/icons/right.svg';
import LeftArraow from '@/assets/icons/left.svg';

import { useState } from 'react';

export default function ImagesGallery({ images }: IImageGalleryProps) {
  const theme = useTheme();
  const [mainImageIndex, setMainImageIndex] = useState<number>(0);
  const queryDownLg = useMediaQuery<unknown>(theme.breakpoints.down('lg'));
  const queryDownSm = useMediaQuery<unknown>(theme.breakpoints.down('sm'));

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
  };

  return (
    <Grid container item xs={queryDownLg ? 12 : 6.3} maxHeight={queryDownLg ? 750 : 628}>
      {images.data ? (
        <Grid container gap={queryDownLg ? 2 : 0}>
          <Grid
            container
            item
            xs={queryDownLg ? 12 : 1.6}
            sx={{
              justifyContent: queryDownSm ? 'space-between' : queryDownLg ? 'center' : 'start',
              overflow: 'hidden',
              flexDirection: queryDownLg ? 'row' : 'column',
              gap: 2,
              order: queryDownLg ? 1 : 0,
            }}
          >
            {images.data.map((image, idx: number) => (
              <CustomGalleryImageContainer item key={image?.id} position="relative">
                <CustomGalleryImage
                  src={image?.attributes.url || defImg}
                  onClick={() => selectImage(idx)}
                  selected={idx === mainImageIndex}
                  blurDataURL={blurDataURL}
                  alt={`Shoe image ${idx + 1}`}
                  fill
                />
              </CustomGalleryImageContainer>
            ))}
          </Grid>
          <Grid container item xs={queryDownLg ? 12 : 10} justifyContent="center">
            <CustomGalleryImageContainer ismain='true' position="relative">
              <CustomGalleryImage
                src={images.data[mainImageIndex]?.attributes.url || defImg}
                alt="Main Image"
                blurDataURL={blurDataURL}
                priority={true}
                ismain='true'
                fill
              />
              <Box position="absolute" bottom={25} right={25}>
                <CustomIconButton onClick={handlePreviousImage} disabled={mainImageIndex === 0}>
                  <Box
                    component={Image}
                    src={LeftArraow}
                    alt="Previous image"
                    width={6.5}
                    height="auto"
                  ></Box>
                </CustomIconButton>
                <CustomIconButton
                  onClick={handleNextImage}
                  disabled={mainImageIndex === images.data.length - 1}
                >
                  <Box
                    component={Image}
                    src={RightArraow}
                    alt="Next image"
                    width={6.5}
                    height="auto"
                  ></Box>
                </CustomIconButton>
              </Box>
            </CustomGalleryImageContainer>
          </Grid>
        </Grid>
      ) : (
        <Grid container item overflow="hidden">
          <CustomGalleryImageContainer ismain='true' position="relative">
            <CustomGalleryImage
              src={defImg}
              alt="Main Image"
              blurDataURL={blurDataURL}
              priority={true}
              ismain='true'
              fill
            />
          </CustomGalleryImageContainer>
        </Grid>
      )}
    </Grid>
  );
}
