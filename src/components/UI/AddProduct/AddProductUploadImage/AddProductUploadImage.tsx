// basic
import React, { useContext, useState } from 'react';
import Image from 'next/image';
// mui

import {
  Button,
  FormLabel,
  Grid,
  Input,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

// assets
import imageIcon from '@/assets/icons/gallery.svg';

// styles
import { CustomUploadWrapper } from './AddProductUploadImageStyles';

// interfaces
import { IAddProductUploadImageProps } from '@/types/addProductTypes';
import AddProductImageConatiner from '../AddProductImageContainer/AddProductImageConatiner';
import ModalDeleteItem from '@/components/Modals/ModalDeleteItem/ModalDeleteItem';
import { ImagesContext } from '@/components/Providers/images';
import { ModalContext } from '@/components/Providers/modal';

export default function AddProductUploadImage({ handleChooseImage }: IAddProductUploadImageProps) {
  const theme = useTheme<Theme>();
  const queryDownLg = useMediaQuery<unknown>(theme.breakpoints.down('lg'));
  const queryUpMd = useMediaQuery<unknown>(theme.breakpoints.up('md'));

  const { selectedImages, setSelectedImages } = useContext(ImagesContext);
  const { clickedId } = useContext(ModalContext);

  const handleDeleteImage = (id: number) =>
    setSelectedImages((prevImages) => prevImages.filter((image) => image.id !== clickedId));

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
              lg: '500px',
              xl: '692px',
            },
          }}
          spacing={{
            md: 2,
            lg: 4,
            xl: 6.5,
          }}
        >
          {selectedImages?.map((productImage) => (
            <Grid key={productImage?.id} item xs={6}>
              <AddProductImageConatiner src={productImage?.url} id={productImage?.id} />
            </Grid>
          ))}

          <ModalDeleteItem
            deleteMessage="Are you sure to delete product image?"
            deleteHandler={() => clickedId && handleDeleteImage(clickedId)}
          />
          <Grid item xs={6}>
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
                sx={{ display: 'none' }}
                required
                id="images"
                name="images"
              />
            </CustomUploadWrapper>
          </Grid>
        </Grid>
      ) : (
        <Button variant="outlined">
          <FormLabel htmlFor="images" sx={{ color: theme.palette.text.primary }}>
            Choose images
            <Input
              type="file"
              onChange={handleChooseImage}
              sx={{ display: 'none' }}
              required
              id="images"
              name="images"
            />
          </FormLabel>
        </Button>
      )}
    </>
  );
}
