// libs
import { Box, Button, FormControl, FormLabel, OutlinedInput, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

// images
import avatarSrc from '@/assets/avatarExample.png';
import styled from '@emotion/styled';
import Head from 'next/head';

// constants
import { UPDATE_PROFILE_INPUTS } from '@/constants';

const CustomForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '48px',
  width: '436px',
});

export default function UpdateProfile() {
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  const handleSetSurname = (e: React.ChangeEvent<HTMLInputElement>) => setSurname(e.target.value);

  const handleSetEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const handleSetPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPhoneNumber(e.target.value);

  return (
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
          <FormControl sx={{ mb: 3 }}>
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
                  : input.id === 'phonenumber'
                  ? phoneNumber
                  : null
              }
              onChange={
                input.id === 'name'
                  ? handleSetName
                  : input.id === 'surname'
                  ? handleSetSurname
                  : input.id === 'email'
                  ? handleSetEmail
                  : input.id === 'phonenumber'
                  ? handleSetPhoneNumber
                  : undefined
              }
            />
          </FormControl>
        ))}
      </CustomForm>
    </Box>
  );
}