import { Grid } from '@mui/material';
import Image from 'next/image';
import logo from '../assets/icons/logo.svg';
import { useRouter } from 'next/router';
import React from 'react';
import { Routes, getImage } from '@/constants';
import SignComments from './SignComments';
import styled from '@emotion/styled';

const LayoutSignErrorPages = styled('div')`
  max-width: 1920px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
`;

type ILayoutSignError = {
  children: React.ReactNode;
};

const LayoutSignError = ({ children }: ILayoutSignError) => {
  const { pathname } = useRouter();

  return (
    <LayoutSignErrorPages>
      <Grid container sx={{ height: 1 }}>
        {pathname === Routes.authorization ||
          pathname === Routes.registration ||
          pathname === Routes.forgot ||
          pathname === Routes.reset ? (
          <Image
            src={logo}
            alt={'logoIcon'}
            style={{ position: 'absolute', top: 50, left: 40 }}
          />
        ) : null}
        <Grid item sm={6}>{children}</Grid>
        <Grid item sm={6} sx={{ position: 'relative' }}>
          <Image
            src={getImage(pathname)}
            alt={`${pathname.slice(1)}Bg`}
            fill
            style={{ objectFit: 'cover', zIndex: 1000 }}
          />
          {pathname === Routes.registration && <SignComments />}
        </Grid>
      </Grid>
    </LayoutSignErrorPages>
  );
};

export default LayoutSignError;