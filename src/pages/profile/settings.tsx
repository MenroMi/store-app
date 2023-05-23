// basic
import Image from 'next/image';
import React, { useContext, useState } from 'react';

// mui
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { useTheme, Theme } from '@mui/material/styles';

// images
import noAvatar from '@/assets/noAvatar.png';

// layout
import Layout from '@/components/Layout/MainLayout';

// components
import AsideProfileMenu from '@/components/UI/Sidebar/AsideProfileMenu/AsideProfileMenu';

// styled components

// constants
import { IFormData } from '@/types/formDataTypes';
import FormSettings from '@/components/Forms/FormSettings/FormSettings';
import { ISettings } from '@/types';
import { UserContext } from '@/components/Providers/user';
import { useMutation } from '@tanstack/react-query';
import { updateUser } from '@/services/userService';

export default function UpdateProfile() {
  const { user } = useContext(UserContext);
  const token = localStorage.getItem('token')
    ? localStorage.getItem('token')
    : sessionStorage.getItem('token');

  const id = Number(user?.id);

  const [updateFormData, setUpdateFormData] = useState<ISettings>({
    firstName: user?.firstName ? user?.firstName : '',
    lastName: user?.lastName ? user?.lastName : '',
    phoneNumber: user?.phoneNumber ? user?.phoneNumber : '',
  });

  const { mutate, isLoading } = useMutation(updateUser);

  console.log('updateFormData: ', updateFormData);

  const theme = useTheme<Theme>();
  const queryDownMd = useMediaQuery(theme.breakpoints.down('md'));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { firstName, lastName, phoneNumber } = updateFormData;
    console.log({ firstName, lastName, phoneNumber });
    mutate(
      { token, id, updateFormData },
      {
        onSuccess: () => {
          console.log('Form updated successfully');
        },
      }
    );
  };

  return (
    <Layout title="Settings">
      <Box sx={{ display: 'flex', gap: '60px', mt: '38px' }}>
        <AsideProfileMenu />
        <Box
          sx={{
            mx: queryDownMd ? 'auto' : '0',
            px: queryDownMd ? '20px' : '0',
            mb: 3,
          }}
        >
          <Typography variant="h2" sx={{ mb: 4.5 }}>
            My Profile
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src={noAvatar}
              alt="Avatar"
              style={{ borderRadius: '50%', border: '2px solid silver' }}
              width={queryDownMd ? 100 : 150}
              height={queryDownMd ? 100 : 150}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: queryDownMd ? 2 : 3,
                ml: queryDownMd ? '28px' : '76px',
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  fontSize: queryDownMd ? '12px' : '16px',
                  width: queryDownMd ? '117px' : '152px',
                  height: queryDownMd ? '30px' : '40px',
                }}
              >
                Change photo
              </Button>
              <Button
                variant="contained"
                sx={{
                  fontSize: queryDownMd ? '12px' : '16px',
                  width: queryDownMd ? '117px' : '152px',
                  height: queryDownMd ? '30px' : '40px',
                }}
              >
                Delete
              </Button>
            </Box>
          </Box>

          <Typography
            variant="body1"
            sx={{
              mt: queryDownMd ? '12px' : 6,
              mb: queryDownMd ? 3 : 6,
            }}
          >
            Welcome back! Please enter your details to log into your account.
          </Typography>
          <FormSettings
            loading={isLoading}
            formData={updateFormData}
            setFormData={setUpdateFormData}
            handleSubmit={handleSubmit}
          />
        </Box>
      </Box>
    </Layout>
  );
}
