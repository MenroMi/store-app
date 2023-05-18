// libs
import { Box, FormLabel, Input, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';

// assets
import imageIcon from '@/assets/icons/gallery.svg';
import { CustomUploadWrapper } from './styles';
import { IAddProductUploadImageProps } from '@/types/addProductTypes';

export default function AddProductUploadImage({ handleChooseImage }: IAddProductUploadImageProps) {
  return (
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
  );
}
