// basic
import React from 'react';
import Link from 'next/link';

// mui
import {
  Box,
  Button,
  Typography,
  Link as LinkMui,
  useTheme,
  Theme,
  useMediaQuery,
} from '@mui/material';

// images
import profileTopBg from '@/assets/profileTopBg.png';
import avatarExample from '@/assets/avatarExample.png';
import productImage from '@/assets/singInBg.png';

// layout
import Layout from '@/components/Layout/MainLayout';

// components
import UserProfile from '@/components/UI/User/UserProfile/UserProfile';
import AsideProfileMenu from '@/components/UI/Sidebar/AsideProfileMenu/AsideProfileMenu';
import CardList from '@/components/UI/Cards/CardList/CardList';
import DropDownMenu from '@/components/UI/Menu/DropDownMenu/DropDownMenu';

import { Routes } from '@/constants';

export default function Home() {
  // mocked data to test, will be removed when we'll start to work with server
  const MOCKED_PRODUCTS = [
    {
      id: 1,
      productImageSrc: productImage,
      productName: 'Nike Air Max 270',
      productPrice: 160,
      productCategory: "Women's shoes",
    },
    {
      id: 2,
      productImageSrc: productImage,
      productName: 'Nike Air Max 270',
      productPrice: 160,
      productCategory: "Women's shoes",
    },
    {
      id: 3,
      productImageSrc: productImage,
      productName: 'Nike Air Max 270',
      productPrice: 160,
      productCategory: "Women's shoes",
    },
    {
      id: 4,
      productImageSrc: productImage,
      productName: 'Nike Air Max 270',
      productPrice: 160,
      productCategory: "Women's shoes",
    },
  ];

  const theme = useTheme<Theme>();
  const queryDownMd = useMediaQuery<unknown>(theme.breakpoints.down('md'));
  const queryDownSm = useMediaQuery<unknown>(theme.breakpoints.down('sm'));

  return (
    <Layout title="Home">
      <Box sx={{ display: 'flex', gap: '60px', mt: '38px' }}>
        <AsideProfileMenu />
        <Box sx={{ maxWidth: '1480px' }}>
          <UserProfile
            avatarSrc={avatarExample}
            profileTopBgSrc={profileTopBg}
            userBonusPoints="1 374"
            username="Jane Meldrum"
          />
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: queryDownSm ? 6 : 15,
                mb: 4.5,
              }}
            >
              <Typography variant="h2">My products</Typography>
              {!queryDownMd && (
                <LinkMui component={Link} href="/add-product" underline="none">
                  <Button variant="contained" sx={{ padding: '10px 26px' }}>
                    Add product
                  </Button>
                </LinkMui>
              )}
            </Box>

            <CardList products={MOCKED_PRODUCTS} />

            {queryDownMd && (
              <LinkMui component={Link} href={Routes.addProduct} underline="none">
                <Button variant="contained" sx={{ padding: '5px 13px', mt: 2.5 }}>
                  Add product
                </Button>
              </LinkMui>
            )}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
