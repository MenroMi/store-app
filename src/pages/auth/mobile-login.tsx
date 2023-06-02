import React from 'react';
import styled from '@emotion/styled';
import singMobBg from '@/assets/singMobBg.png';
import Image from 'next/image';
import logo from '@/assets/icons/logo.svg';
import { Box, Button, Typography, Link as LinkMui, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import { Routes } from '@/constants/routes';
import Link from 'next/link';

const LayoutSignPage = styled('div')`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Sign = () => {
  const { push } = useRouter();
  const {
    palette: {
      primary: { main },
    },
  } = useTheme();

  return (
    <LayoutSignPage>
      <Image src={singMobBg} alt={`singMobBg`} fill style={{ objectFit: 'cover', zIndex: 1000 }} priority={true} />
      <Box
        component={'div'}
        sx={{
          position: 'absolute',
          zIndex: 1500,
          minWidth: 1,
          minHeight: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: '90px 20px 34px',
        }}
      >
        <Image
          src={logo}
          alt={'logoIcon'}
          priority={true}
          width={48}
          height={36}
          onClick={() => push(Routes.search)}
        />
        <Box component={'div'} sx={{ maxWidth: '320px', width: 1, textAlign: 'center' }}>
          <Typography variant="h4Bold" sx={{ maxWidth: '110px', textAlign: 'start' }}>
            Welcome to Wellrun
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: '20px', width: 1 }}
            onClick={() => push(Routes.login)}
          >
            Sign in
          </Button>
          <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', maxWidth: '436px' }}>
            <Typography variant="caption">Don’t have an account?</Typography>
            <LinkMui
              component={Link}
              href={Routes.register}
              underline="none"
              sx={{ p: 0, lineHeight: 1 }}
            >
              <Typography variant="caption" sx={{ color: main }}>
                Sign up
              </Typography>
            </LinkMui>
          </Box>
        </Box>
      </Box>
    </LayoutSignPage>
  );
};

export default Sign;
