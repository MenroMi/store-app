// libs
import { Box, Button, FormControl, FormLabel, OutlinedInput, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

// images
import avatarSrc from '@/assets/avatarExample.png';
import styled from '@emotion/styled';
import Head from 'next/head';

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
        <FormControl sx={{ mb: 3 }}>
          <FormLabel htmlFor="name">
            <Typography variant="caption">Name</Typography>
          </FormLabel>
          <OutlinedInput
            sx={{ mt: 1 }}
            id="name"
            placeholder="Name"
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>

        <FormControl sx={{ mb: 3 }}>
          <FormLabel htmlFor="name">
            <Typography variant="caption">Surname</Typography>
          </FormLabel>
          <OutlinedInput
            sx={{ mt: 1.5 }}
            id="surname"
            placeholder="Surname"
            required
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </FormControl>

        <FormControl sx={{ mb: 3 }}>
          <FormLabel htmlFor="email">
            <Typography variant="caption">Email</Typography>
          </FormLabel>
          <OutlinedInput
            sx={{ mt: 1 }}
            id="email"
            placeholder="email@example.com"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="phonenumber">
            <Typography variant="caption">Phone number</Typography>
          </FormLabel>
          <OutlinedInput
            sx={{ mt: 1 }}
            id="phonenumber"
            placeholder="(949) 354-2574"
            required
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </FormControl>


      </CustomForm>
    </Box>
  );
}
