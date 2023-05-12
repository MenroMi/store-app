// basic
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

// mui
import { Box, Button, Typography, Link as LinkMui } from '@mui/material';

// images
import profileTopBg from '../assets/profileTopBg.png';
import avatarExample from '../assets/avatarExample.png';
import productImage from '../assets/singInBg.png';

// components
import UserProfile from '@/components/UI/User/UserProfile/UserProfile';
import Card from '@/components/UI/Cards/Card/Card';

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

  return (
    <Box sx={{ maxWidth: '1480px' }}>
      <Head>
        <title>Home</title>
      </Head>
      <UserProfile
        avatarSrc={avatarExample}
        profileTopBgSrc={profileTopBg}
        userBonusPoints="1 374"
        username="Jane Meldrum"
      />
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 15, mb: 4.5 }}>
          <Typography variant="h2">My products</Typography>
          <LinkMui component={Link} href="/add-product" underline="none">
            <Button variant="contained" sx={{ padding: '10px 26px' }}>
              Add product
            </Button>
          </LinkMui>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {MOCKED_PRODUCTS.map((product) => (
            <Card
              productCategory={product.productCategory}
              productImageSrc={product.productImageSrc}
              productName={product.productName}
              productPrice={product.productPrice}
              key={product.id}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
