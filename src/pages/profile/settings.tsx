// basic
import Image from 'next/image';
import React, { useState } from 'react';

// mui
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
} from '@mui/material';
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

export default function UpdateProfile() {
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    surname: '',
    email: '',
    phone: ''
  });

  const theme = useTheme<Theme>();
  const queryDownMd = useMediaQuery(theme.breakpoints.down('md'));


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email,phone,surname} = formData;
    console.log(name, email, phone, surname);
  };

  
  return (
    <Layout title="Settings">
      <Box sx={{ display: 'flex', gap: '60px', mt: '38px' }}>
        <AsideProfileMenu />
        <Box sx={{
          mx: queryDownMd ? 'auto' : '0', 
          px: queryDownMd ? '20px' : '0',
          mb:3
          }}>
          <Typography variant="h2" sx={{ mb: 4.5 }}>
            My Profile
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Image
              src={noAvatar}
              alt="Avatar"
              style={{borderRadius:'50%', border:'2px solid silver'}}
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
                  height: queryDownMd ? '30px' : '40px'
                }}
              >
                Change photo
              </Button>
              <Button
                variant="contained"
                sx={{
                  fontSize: queryDownMd ? '12px' : '16px',
                  width: queryDownMd ? '117px' : '152px',
                  height: queryDownMd ? '30px' : '40px'
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
            mb: queryDownMd ? 3 : 6
}}>
           Welcome back! Please enter your details to log into your account.
          </Typography>
          <FormSettings loading={false} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
        </Box>
      </Box>
    </Layout>
  );
}
