// basic
import Head from 'next/head';

// mui
import { Box, Typography } from '@mui/material';

// images
import avatarExample from '@/assets/avatarExample.png';
import productImage from '@/assets/singInBg.png';
import profileTopBg from '@/assets/profileTopBg.png';

// layout
import Layout from '@/components/Layout/MainLayout';

// components
import UserProfile from '@/components/UI/User/UserProfile/UserProfile';
import Card from '@/components/UI/Cards/Card/Card';
import AsideProfileMenu from '@/components/UI/Sidebar/AsideProfileMenu/AsideProfileMenu';

export default function Profile() {
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
    <Layout title="Profile">
      <Box sx={{ maxWidth: '1920px', display: 'flex', mt: '38px', gap: '60px' }}>
        <AsideProfileMenu />
        <Box>
          <UserProfile
            avatarSrc={avatarExample}
            profileTopBgSrc={profileTopBg}
            userBonusPoints="1 374"
            username="Jane Meldrum"
          />
          <Box sx={{ mt: 15 }}>
            <Typography variant="h2" sx={{ mb: 4.5 }}>
              Last Viewed Products
            </Typography>
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
      </Box>
    </Layout>
  );
}
