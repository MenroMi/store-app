// basic
import React, { useContext } from 'react';
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

import { Routes } from '@/constants';
import { getProfilePhoto } from '@/utils/profile/profilePhoto';
import { UserContext } from '@/components/Providers/user';

export default function Home() {
  const { user } = useContext(UserContext);

  const theme = useTheme<Theme>();
  const queryDownMd = useMediaQuery<unknown>(theme.breakpoints.down('md'));
  const queryDownSm = useMediaQuery<unknown>(theme.breakpoints.down('sm'));

  return (
    <Layout title="Home">
      <Box sx={{ display: 'flex', gap: '60px', mt: queryDownMd ? 0 : '38px' }}>
        <AsideProfileMenu />
        <Box sx={{ maxWidth: '1480px' }}>
          <UserProfile
            avatarSrc={avatarExample}
            profileTopBgSrc={profileTopBg}
            userBonusPoints="1 374"
            username={
              user?.firstName && user?.lastName
                ? `${user?.firstName} ${user?.lastName}`
                : `${user?.username}`
            }
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
                <LinkMui component={Link} href={Routes.addProduct} underline="none">
                  <Button variant="contained" sx={{ padding: '10px 26px' }}>
                    Add product
                  </Button>
                </LinkMui>
              )}
            </Box>

            <CardList />

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
