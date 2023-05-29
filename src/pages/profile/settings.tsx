// basic
import Image from 'next/image';
import React, { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';

// mui
import { Box, Button, FormLabel, Input, Typography, useMediaQuery } from '@mui/material';
import { useTheme, Theme } from '@mui/material/styles';

// images
import noAvatar from '@/assets/noAvatar.png';
import { uploadImage } from '@/services/addProductApi';

// layout
import Layout from '@/components/Layout/MainLayout';

// components
import AsideProfileMenu from '@/components/UI/Sidebar/AsideProfileMenu/AsideProfileMenu';
import FormSettings from '@/components/Forms/FormSettings/FormSettings';
import ButtonLoader from '@/components/UI/Buttons/ButtonLoader/ButtonLoader';

// constants
import { ISettings } from '@/types';
import { UserContext } from '@/components/Providers/user';
import { deleteAvatar, getUser, updateUser } from '@/services/userService';
import { Routes } from '@/constants';

export default function UpdateProfile() {
  const [loading, setLoading] = useState<boolean>(false)
  const { user, setUser } = useContext(UserContext);
  const { mutate: updateMutate} = useMutation(updateUser);
  const { mutate: deleteMutate, isLoading } = useMutation(deleteAvatar);
  const { mutate: userMutate } = useMutation(getUser);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const theme = useTheme<Theme>();
  const { push } = useRouter();
  const queryDownMd = useMediaQuery(theme.breakpoints.down('md'));

  const id = Number(user?.id);
  const [updateFormData, setUpdateFormData] = useState<ISettings>({
    firstName: user?.firstName ? user.firstName : '',
    lastName: user?.lastName ? user.lastName : '',
    phoneNumber: user?.phoneNumber ? user.phoneNumber : '',
  });

  const [avatarToDisplay, setAvatarToDisplay] = useState(
    user && user?.avatar?.formats?.thumbnail?.url ? user?.avatar.formats?.thumbnail?.url : ''
  );
  const [avatarToPost, setAvatarToPost] = useState<File>();

  const handleAvatarSetup = async (event: ChangeEvent<HTMLInputElement>) => {
    const avatar = event.target.files?.[0] as File;
    if (avatar) {
      setAvatarToDisplay(URL.createObjectURL(avatar));
      setAvatarToPost(avatar);
    }
  };

  const invokeAvatarChoise = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true)
    let dataToUpdate = { ...updateFormData };

    const token = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : sessionStorage.getItem('token');

    if (avatarToPost) {
      const response = await uploadImage(avatarToPost);
      const avatarID = response.data[0].id;
      dataToUpdate = { ...updateFormData, avatar: avatarID };
    }

    updateMutate(
      { token, id, dataToUpdate },
      {
        onSuccess: async () => {
          userMutate(token, {
            onSuccess: async (data) => {
              await push(Routes.myProducts);
               setLoading(false)
              setUser(data);
            },
          });
          console.log('Form updated successfully');
        },
        onError: (error) => {
          console.log('Something went wrong: ', error);
        },
      }
    );
  };

  const deleteAvatarIcon = () => {
    const token = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : sessionStorage.getItem('token');

    if (user?.avatar) {
      if (user.avatar.formats.thumbnail.url) {
        deleteMutate(
          { token, id: user.avatar.id },
          {
            onSuccess: async () => {
              userMutate(token, {
                onSuccess: (data) => {
                  setUser(data);
                  setAvatarToDisplay('');
                },
              });

              console.log('Form updated successfully');
            },
          }
        );
      }
    }
  };

  return (
    <Layout title="Settings">
      <Box sx={{ display: 'flex', gap: '60px', mt: queryDownMd ? 0 : '38px' }}>
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
              src={avatarToDisplay ? avatarToDisplay : noAvatar}
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
              <FormLabel htmlFor="upload">
                <Button
                  variant="outlined"
                  onClick={invokeAvatarChoise}
                  sx={{
                    fontSize: queryDownMd ? '12px' : '16px',
                    width: queryDownMd ? '117px' : '152px',
                    height: queryDownMd ? '30px' : '40px',
                  }}
                >
                  Change photo
                </Button>
                <Input
                  type="file"
                  ref={fileInputRef}
                  name="upload"
                  id="upload"
                  onChange={handleAvatarSetup}
                  sx={{ display: 'none' }}
                  inputProps={{
                    accept: '.jpeg, .jpg, .png',
                    size: 1048576,
                  }}
                />
              </FormLabel>

              <Button
                variant="contained"
                onClick={deleteAvatarIcon}
                disabled={isLoading}
                sx={{
                  fontSize: queryDownMd ? '12px' : '16px',
                  width: queryDownMd ? '117px' : '152px',
                  height: queryDownMd ? '30px' : '40px',
                }}
              >
                {isLoading ? <ButtonLoader /> : 'Delete'}
                
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
            loading={loading}
            formData={updateFormData}
            setFormData={setUpdateFormData}
            handleSubmit={handleSubmit}
          />
        </Box>
      </Box>
    </Layout>
  );
}
