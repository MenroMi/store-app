// basic
import React, { useContext } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';

// mui
import { Button, styled, Box, useMediaQuery  } from '@mui/material';
import theme from '@/utils/mui/theme';

// context Provider
import { UserContext } from '@/providers/user';

// components constants
import Header from '@/components/UI/Header';
import { Routes } from '@/constants/routes';

//images
import error404 from '@/assets/error404.png';
import error500  from '@/assets/error404-2.png';

interface IErrorLayout {
    children: React.ReactNode;
    title?: string;
};

export const CustomButton = styled(Button)({
  width: '152px',
  marginTop: '8px',
  padding: 5,
});

const ErrorLayout = ({title = 'Shoes Shop', children}: IErrorLayout) => {
  const router = useRouter();
  const queryDownMd = useMediaQuery<unknown>(theme.breakpoints.down('md'));
  const queryDownFold = useMediaQuery<unknown>(theme.breakpoints.down(370));
  const {user} = useContext(UserContext)

  const handleGoHome = () => {
    router.push(user ? Routes.myProducts : Routes.search);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        {!queryDownMd && <Header />}
        <Box
          sx={{
            height: !queryDownMd ? {
              lg: 'calc(100vh - 120px)',
              md: 'calc(100vh - 100px)',
              xs: 'calc(100vh - 64px)',
            } : '100vh',
            display: 'flex',
            flexDirection: queryDownMd ? 'column' : 'row',
          }}
        >
          <Box
            sx={{
              width: queryDownMd ? '100%' : '50%',
              height: queryDownMd ? '20%' : '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box sx={{
              maxWidth: '538px', p: '20px'
            }}>
              {!queryDownMd && (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    mb: '20px',
                  }}
                >
                  {children}
                </Box>
              )}
              <Box sx={{ display: 'flex', flexDirection: queryDownFold ? 'column' : 'row', gap: 2 }}>
                <CustomButton variant="contained" onClick={handleGoHome}>
                  Go home
                </CustomButton>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: queryDownMd ? '100%' : '50%',
              height: queryDownMd ? '80%' : '100%',
              position: 'relative',
              order: queryDownMd ? '-1' : '0'
            }}
          >
            {queryDownMd && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  top: '40px',
                  zIndex: '1000',
                  textAlign: 'center'
                }}
              >
                {children}
              </Box>
            )}
            <Image
              alt="error404"
              src={router.pathname === Routes.error404 ? error404 : error500}
              priority={true}
              fill
              style={{
                objectFit: 'cover',
                zIndex: '100',
                borderBottomRightRadius: queryDownMd ? '39px' : '0',
                borderBottomLeftRadius: queryDownMd ? '39px' : '0'
              }}
            />
          </Box>
        </Box>
      </main>
    </>
  );
};

export default ErrorLayout;
