// basic
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// mui
import { Button, Typography, Link as LinkMui, useMediaQuery } from '@mui/material';
import theme from '@/utils/mui/theme';

// icons
import noProducts from '@/assets/icons/noProducts.svg';

// styled components
import { CustomEmptyStateWrapper } from '../EmptyStateProducts/styles';
import { Routes } from '@/constants/routes';

const EmptyStateProducts = () => {
  const queryUpLg = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <CustomEmptyStateWrapper sx={{ marginTop: queryUpLg ? '250px' : '80px' }}>
      <Image src={noProducts} alt="No products" />
      <Typography variant="h5" sx={{ mt: '10px' }}>
        You don’t have any products in your bag yet
      </Typography>
      <LinkMui component={Link} href={Routes.search} sx={{ mt: 5 }} underline="none">
        <Button variant="contained" sx={{ padding: '10px 26px' }}>
          Search products
        </Button>
      </LinkMui>
    </CustomEmptyStateWrapper>
  );
};

export default EmptyStateProducts;
