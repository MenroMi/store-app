// basic
import Head from 'next/head';

// mui
import { Box, Grid, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';

// images
import avatarExample from '../assets/avatarExample.png';
import productImage from '../assets/singInBg.png';
import profileTopBg from '../assets/profileTopBg.png';

// layout
import Layout from '@/components/Layout/MainLayout';

// components
import UserProfile from '@/components/UI/User/UserProfile/UserProfile';
import AsideProfileMenu from '@/components/UI/Sidebar/AsideProfileMenu/AsideProfileMenu';
import DropDownMenu from '@/components/UI/Menu/DropDownMenu/DropDownMenu';
import CardList from '@/components/UI/Cards/CardList/CardList';

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

  const theme = useTheme<Theme>();

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
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 15,
                mb: 4.5,
              }}
            >
              <Typography variant="h2">Last viewed products</Typography>
            </Box>

            <CardList products={MOCKED_PRODUCTS} />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
