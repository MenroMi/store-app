// basic
import Image from 'next/image';
import React, { useState } from 'react';
import Head from 'next/head';

// mui
import { Box, Button, FormControl, FormLabel, OutlinedInput, Typography } from '@mui/material';

// images
import avatarSrc from '@/assets/avatarExample.png';

// layout
import Layout from '@/components/Layout/MainLayout';

// styled components
import { CustomForm } from '@/styles/pageStyles/UpdateProfileStyles';

// constants
import { UPDATE_PROFILE_INPUTS } from '@/constants';

export default function UpdateProfile() {
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setValue(e.target.value);
  };

  return (
    <Layout title="Update profile">
      <Box>
        <Head>
          <title>Update profile</title>
        </Head>
        <Typography variant="h2" sx={{ mb: 4.5 }}>
          My Profile
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Image src={avatarSrc} alt="Avatar" width={150} height={150} />
          <Box sx={{ display: 'flex', flexDirection: 'column', ml: 9.5 }}>
            <Button variant="outlined" sx={{ padding: '10px 20px' }}>
              Change photo
            </Button>
            <Button variant="contained" sx={{ mt: 3, padding: '10px 50px' }}>
              Delete
            </Button>
          </Box>
        </Box>

        <Typography variant="body1" sx={{ mt: 6 }}>
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
    </Layout>
  );
}
