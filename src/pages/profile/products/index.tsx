// basic
import React, { useContext, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// mui
import { Box, Button, Typography, useTheme, Theme, useMediaQuery } from '@mui/material';

// images
import profileTopBg from '@/assets/profileTopBg.png';

// layout
import Layout from '@/components/Layout/MainLayout';

// components
import UserProfile from '@/components/UI/User/UserProfile/UserProfile';
import AsideProfileMenu from '@/components/UI/Sidebar/AsideProfileMenu/AsideProfileMenu';
import { CardsSlider } from '@/components/UI/Slider/CardsSlider/CardsSlider';

// constants
import { Routes } from '@/constants/routes';
// services
import { deleteProduct, getUserProducts } from '@/services/myProfileApi';

// contexts
import { UserContext } from '@/providers/user';
import { ModalContext } from '@/providers/modal';
import { useRouter } from 'next/router';
import Notification from '@/components/UI/Notification/Notificaton';
import { NotificationContext } from '@/providers/notification';
import { getProfilePhoto } from '@/utils/profile/profilePhoto';
import ButtonLoader from '@/components/UI/Buttons/ButtonLoader/ButtonLoader';
import { CardsSliderMobile } from '@/components/UI/Slider/CardsSliderMobile/CardsSliderMobile';

export default function Home() {
  const theme = useTheme<Theme>();
  const queryDownLg = useMediaQuery<unknown>(theme.breakpoints.down('lg'));
  const queryDownMd = useMediaQuery<unknown>(theme.breakpoints.down('md'));
  const queryDownSm = useMediaQuery<unknown>(theme.breakpoints.down('sm'));
  const queryClient = useQueryClient();
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);

  const router = useRouter();

  const { user } = useContext(UserContext);
  const {
    setIsOpen: setIsNotificationOpen,
    setIsFailed,
    setMessage,
  } = useContext(NotificationContext);

  const { data: userProducts } = useQuery(['userProducts'], () =>
    getUserProducts(localStorage.getItem('token') || sessionStorage.getItem('token') || 'guest')
  );

  const { mutate } = useMutation(
    (id: number) =>
      deleteProduct(
        localStorage.getItem('token') || sessionStorage.getItem('token') || 'guest',
        id
      ),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(['userProducts']);
        setIsDeleting(false);
        setIsModalOpen(false);
        setIsNotificationOpen(true);
        setIsFailed(false);
        setMessage("You've succesfully deleted the product");
      },

      onError: () => {
        setIsDeleting(false);
        setIsModalOpen(false);
        setIsNotificationOpen(true);
        setIsFailed(true);
        setMessage('Something went wrong: the product was not deleted');
      },
    }
  );

  const { clickedId, setIsDeleting, setIsOpen: setIsModalOpen } = useContext(ModalContext);

  return (
    <Layout title="Home">
      <Box sx={{ display: 'flex', gap: '60px', mt: queryDownMd ? 0 : '38px' }}>
        <AsideProfileMenu />

        <Box sx={{ m: '38px' }}>
          <UserProfile
            avatarSrc={getProfilePhoto(user)}
            profileTopBgSrc={profileTopBg}
            userBonusPoints="1 374"
            username={user?.firstName || user?.username || 'Guest'}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '1480px' }}>
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
                <Button
                  variant="contained"
                  sx={{ padding: '10px 26px', width: '146px' }}
                  disabled={isRedirecting}
                  onClick={async () => {
                    setIsRedirecting(true);
                    await router.push(Routes.addProduct);
                  }}
                >
                  {isRedirecting ? <ButtonLoader /> : 'Add product'}
                </Button>
              )}
            </Box>

            {queryDownLg ? (
              <CardsSliderMobile
                products={userProducts?.data?.products}
                deleteProduct={() => {
                  setIsDeleting(true);
                  mutate(clickedId!);
                }}
              />
            ) : (
              <CardsSlider
                products={userProducts?.data?.products}
                deleteProduct={() => {
                  setIsDeleting(true);
                  mutate(clickedId!);
                }}
              />
            )}

            {queryDownMd && userProducts?.data?.products?.length > 0 && (
              <Button
                variant="contained"
                onClick={async () => {
                  setIsRedirecting(true);
                  await router.push(Routes.addProduct);
                }}
                disabled={isRedirecting}
                sx={{ padding: '5px 13px', mt: 2.5, width: '146px' }}
              >
                {isRedirecting ? <ButtonLoader /> : 'Add product'}
              </Button>
            )}
          </Box>
        </Box>
      </Box>

      <Notification />
    </Layout>
  );
}
