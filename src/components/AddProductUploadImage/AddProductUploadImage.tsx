// libs
import { Box, FormLabel, Input, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';

// assets
import imageIcon from '@/assets/icons/gallery.svg';

export default function AddProductUploadImage() {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px dashed #5C5C5C',
        borderRadius: '8px',
        height: '100%',
      }}
    >
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
    </Box>
  );
}
