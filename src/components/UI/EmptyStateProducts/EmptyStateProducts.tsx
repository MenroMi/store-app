import React from 'react';
import { CustomEmptyStateWrapper } from './styles';
import noProducts from '@/assets/icons/noProducts.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Typography, Link as LinkMui } from '@mui/material';
import { Routes } from '@/constants/routes';

const EmptyStateProducts = () => {
  return (
    <CustomEmptyStateWrapper>
      <Image src={noProducts} alt="No products" />
      <Typography variant="h5" sx={{ mt: '10px' }}>
        You don’t have any products yet
      </Typography>
      <Typography variant="body1" sx={{ mt: '10px' }}>
        Post can contain video, images and text.
      </Typography>
      <LinkMui component={Link} href={Routes.addProduct} sx={{ mt: 5 }} underline="none">
        <Button variant="contained" sx={{ padding: '10px 26px' }}>
          Add product
        </Button>
      </LinkMui>
    </CustomEmptyStateWrapper>
  );
};

export default EmptyStateProducts;
