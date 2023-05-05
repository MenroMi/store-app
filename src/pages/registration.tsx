import Head from 'next/head';
import React, { useState } from 'react';
import Image from 'next/image';
import singUp from '../assets/singUpBg.png'
import Grid from '@mui/material/Grid'

type Props = {}

const Registration = (props: Props) => {
  return (
    <>
      <Head>
        <title>Registration</title>
      </Head>
      <main>
        <Grid container sx={{ height: 1 }}>
          <Grid item sm={6}>
            <Grid
              sx={{ height: 1 }}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              alignContent="center"
              wrap="wrap"
            >
              asd
            </Grid>
          </Grid>
          <Grid item sm={6} sx={{ position: 'relative' }}>
            <Image src={singUp} alt="singIn" fill style={{ objectFit: 'cover' }} />
          </Grid>
        </Grid>
      </main>
    </>
  );
}

export default Registration