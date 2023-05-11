// libs
import { Box, FormLabel, Input, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';

// assets
import imageIcon from '@/assets/icons/gallery.svg';
import { CustomUploadWrapper } from './styles';

export default function AddProductUploadImage() {
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
        onChange={(e) => console.log(e.target.value)}
        style={{ display: 'none' }}
        required
        id="images"
      />
    </CustomUploadWrapper>
  );
}
