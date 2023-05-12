import { Grid, Theme, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import logo from '../assets/icons/logo.svg'
import { useRouter } from 'next/router'
import React from 'react'
import { Routes, getImage } from '@/constants'
import SignComments from './SignComments'
import styled from '@emotion/styled'

const LayoutSignErrorPages = styled('div')`
	max-width: 1920px;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	position: relative;
`

type ILayoutSignError = {
  children: React.ReactNode
}

const LayoutSignError = ({ children }: ILayoutSignError) => {
  const { pathname } = useRouter()
  const theme = useTheme<Theme>()
  const queryDownMd = useMediaQuery<unknown>(theme.breakpoints.down('md'))
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
            style={{
              position: 'absolute',
              top: queryDownMd ? 18 : 50,
              left: queryDownMd ? 20 : 40,
            }}
            width={queryDownMd ? 35.31 : 40}
            height={queryDownMd ? 26.52 : 30}
          />
        ) : null}
        <Grid item sm={6} sx={{ pt: queryDownMd ? '58.87px' : 0 }}>
          <Grid
            container
            sx={{
              height: 1,
              flexDirection: 'column',
              justifyContent: queryDownMd ? 'start' : 'center',
              alignContent: 'center',
              alignItems: 'start',
              px: '20px',
              pt: queryDownMd ? '35.13px' : 0,
              borderTop: queryDownMd ? '1px solid #EAECF0' : 'none',
            }}
          >
            {children}
          </Grid>
        </Grid>
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
  )
}

export default LayoutSignError