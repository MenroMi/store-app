// basic
import Image from 'next/image';
import React, { useState } from 'react';

// mui
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  OutlinedInput,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme, Theme } from '@mui/material/styles';

// images
import avatarSrc from '@/assets/avatarExample.png';

// layout
import Layout from '@/components/Layout/MainLayout';

// components
import AsideProfileMenu from '@/components/UI/Sidebar/AsideProfileMenu/AsideProfileMenu';

// styled components
import { CustomForm } from '@/styles/pageStyles/UpdateProfileStyles';

// constants
import { UPDATE_PROFILE_INPUTS } from '@/constants';

export default function UpdateProfile() {
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const theme = useTheme<Theme>();
  const queryDownMd = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setValue(e.target.value);
  };

  return (
    <Layout title="Update profile">
      <Box sx={{ display: 'flex', gap: '60px', mt: '38px' }}>
        <AsideProfileMenu />
        <Box>
          <Typography variant="h2" sx={{ mb: 4.5 }}>
            My Profile
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src={avatarSrc}
              alt="Avatar"
              width={queryDownMd ? 100 : 150}
              height={queryDownMd ? 100 : 150}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                ml: `${queryDownMd ? '28px' : '76px'}`,
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  padding: `${queryDownMd ? '8px 16px' : '10px 20px'}`,
                  fontSize: `${queryDownMd && '12px'}`,
                }}
              >
                Change photo
              </Button>
              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  padding: `${queryDownMd ? '8px 40px' : '10px 50px'}`,
                  fontSize: `${queryDownMd && '12px'}`,
                }}
              >
                Delete
              </Button>
            </Box>
          </Box>

          <Typography variant="body1" sx={{ mt: `${queryDownMd ? '12px' : '48px'}` }}>
            Welcome back! Please enter your details to log into your account.
          </Typography>

          <CustomForm>
            {UPDATE_PROFILE_INPUTS.map((input) => (
              <FormControl key={input.id} sx={{ mb: 3 }}>
                <FormLabel htmlFor={input.id}>
                  <Typography variant="caption">{input.label}</Typography>
                </FormLabel>
                <OutlinedInput
                  sx={{ mt: 1 }}
                  id={input.id}
                  placeholder={input.placeholder}
                  required
                  type={input.type}
                  value={
                    input.id === 'name'
                      ? name
                      : input.id === 'surname'
                      ? surname
                      : input.id === 'email'
                      ? email
                      : phoneNumber
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(
                      e,
                      input.id === 'name'
                        ? setName
                        : input.id === 'surname'
                        ? setSurname
                        : input.id === 'email'
                        ? setEmail
                        : setPhoneNumber
                    )
                  }
                />
              </FormControl>
            ))}
          </CustomForm>
        </Box>
      </Box>
    </Layout>
  );
}
