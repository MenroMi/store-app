// basic
import React, { useContext } from 'react';
import Link from 'next/link';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

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
import noAvatar from '@/assets/noAvatar.png';

// layout
import Layout from '@/components/Layout/MainLayout';

// components
import UserProfile from '@/components/UI/User/UserProfile/UserProfile';
import AsideProfileMenu from '@/components/UI/Sidebar/AsideProfileMenu/AsideProfileMenu';
import { CardsSlider } from '@/components/UI/Slider/CardsSlider/CardsSlider';

// constants
import { Routes } from '@/constants';

// services
import { deleteProduct, getUserProducts } from '@/services/myProfileApi';

// contexts
import { UserContext } from '@/components/Providers/user';
import { ModalContext } from '@/components/Providers/modal';

export default function Home() {
  const theme = useTheme<Theme>();
  const queryDownMd = useMediaQuery<unknown>(theme.breakpoints.down('md'));
  const queryDownSm = useMediaQuery<unknown>(theme.breakpoints.down('sm'));
  const queryClient = useQueryClient();

  const { user } = useContext(UserContext);

  const { data: userProducts, isLoading } = useQuery(['userProducts'], () =>
    getUserProducts(localStorage.getItem('token') || sessionStorage.getItem('token') || 'guest')
  );

  const { mutate } = useMutation(
    (id: number) =>
      deleteProduct(
        localStorage.getItem('token') || sessionStorage.getItem('token') || 'guest',
        id
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['userProducts']);
      },
    }
  );

  const { clickedId } = useContext(ModalContext);

  return (
    <Layout title="Home">
      <Box sx={{ display: 'flex', gap: '60px', mt: queryDownMd ? 0 : '38px' }}>
        <AsideProfileMenu />

        <Box sx={{ maxWidth: '1480px', m: '38px' }}>
          <UserProfile
            avatarSrc={user?.avatar || noAvatar}
            profileTopBgSrc={profileTopBg}
            userBonusPoints="1 374"
            username={user?.username || 'Guest'}
          />
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: queryDownSm ? 10 : 15,
                mb: 4.5,
              }}
            >
              <Typography variant="h2">My products</Typography>
              {!queryDownMd && userProducts?.data?.products?.length > 0 && (
                <LinkMui component={Link} href={Routes.addProduct} underline="none">
                  <Button variant="contained" sx={{ padding: '10px 26px' }}>
                    Add product
                  </Button>
                </LinkMui>
              )}
            </Box>

            <CardsSlider
              products={userProducts?.data?.products}
              deleteProduct={() => mutate(clickedId!)}
            />

            {queryDownMd && userProducts?.data?.products?.length > 0 && (
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
