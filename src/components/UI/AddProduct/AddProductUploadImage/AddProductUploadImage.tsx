// libs
import {
  Box,
  FormLabel,
  Grid,
  Input,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import Image from 'next/image';

// assets
import imageIcon from '@/assets/icons/gallery.svg';
import { CustomUploadWrapper } from './styles';
import { IAddProductUploadImageProps } from '@/types/addProductTypes';

export default function AddProductUploadImage({
  handleChooseImage,
  selectedImages,
}: IAddProductUploadImageProps) {
  const theme = useTheme<Theme>();
  const queryDownLg = useMediaQuery<unknown>(theme.breakpoints.down('lg'));
  const queryUpMd = useMediaQuery<unknown>(theme.breakpoints.up('md'));
  return (
    <>
      <Typography
        variant="caption"
        sx={{ mb: 2.5, display: 'block', marginTop: queryDownLg ? '24px' : 0 }}
      >
        Product images
      </Typography>

      {queryUpMd ? (
        <Grid
          container
          sx={{
            maxWidth: {
              xl: '692px',
              lg: '500px',
            },
          }}
          spacing={{
            xl: 6.5,
            lg: 4,
            md: 2,
          }}
        >
          <Grid
            item
            xs={6}
            sx={{
              width: queryDownLg ? '160px' : '320px',
              height: queryDownLg ? '190px' : '380px',
            }}
          >
            <CustomUploadWrapper>
              <Image src={imageIcon} alt="Image" />
              <Typography variant="body1">Drop your image here</Typography>
              <Typography variant="body1">
                or select{' '}
                <FormLabel
                  htmlFor="images"
                  sx={{ textDecoration: 'underline', color: '#141E7A', cursor: 'pointer' }}
                >
                  click to browse
                </FormLabel>
              </Typography>
              <Input
                type="file"
                onChange={handleChooseImage}
                style={{ display: 'none' }}
                required
                id="images"
                name="images"
              />
            </CustomUploadWrapper>
          </Grid>

          {selectedImages?.map((productImage, index) => (
            <Grid
              key={index}
              item
              xs={6}
              sx={{
                maxWidth: queryDownLg ? '160px' : '320px',
                maxHeight: queryDownLg ? '190px' : '380px',
              }}
            >
              <Image
                src={productImage}
                alt="Product image"
                style={{ width: '100%', height: '100%' }}
                width={queryDownLg ? 160 : 320}
                height={queryDownLg ? 190 : 380}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <p>asdasd</p>
      )}
    </>
  );
}

// <Typography
// variant="caption"
// sx={{ mb: 2.5, display: 'block', marginTop: queryDownLg ? '24px' : 0 }}
// >
// Product images
// </Typography>

// <Grid
// container
// sx={{
//   maxWidth: {
//     xl: '692px',
//     lg: '500px',
//   },
// }}
// spacing={{
//   xl: 6.5,
//   lg: 4,
//   md: 2,
// }}
// >
// <Grid
//   item
//   xs={6}
//   sx={{
//     width: queryDownLg ? '190px' : '320px',
//     height: queryDownLg ? '250px' : '380px',
//   }}
// >
//   <AddProductUploadImage handleChooseImage={handleChooseImage} />
// </Grid>

// {selectedImages?.map((productImage, index) => (
//   <Grid
//     key={index}
//     item
//     xs={6}
//     sx={{
//       maxWidth: queryDownLg ? '190px' : '320px',
//       maxHeight: queryDownLg ? '250px' : '380px',
//     }}
//   >
//     <Image
//       src={productImage}
//       alt="Product image"
//       style={{ width: '100%', height: '100%' }}
//       width={queryDownLg ? 190 : 320}
//       height={queryDownLg ? 250 : 380}
//     />
//   </Grid>
// ))}
// </Grid>
