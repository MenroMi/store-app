import { Grid, SvgIcon } from '@mui/material'
import Image from 'next/image'
import logo from '../assets/icons/logo.svg'
import { useRouter } from 'next/router'
import React from 'react'
import { Routes, getImage } from '@/constants'
import SignComments from './SignComments'

type ISplitLayoutProps = {
  children: React.ReactNode,
}

const SplitLayout = ({ children }: ISplitLayoutProps) => {
  const { pathname } = useRouter()
  return (
    <>
      {(pathname === Routes.authorization || pathname === Routes.registration || pathname === Routes.forgot || pathname === Routes.reset) &&
        < Image src={logo} alt={'logoIcon'} style={{ position: 'absolute', top: 50, left: 40 }} />
      }
      <Grid container height={1}>
        <Grid item sm={6}>{children}</Grid>
        <Grid item sm={6} position='relative'>
          <Image
            src={getImage(pathname)}
            alt={`${pathname.slice(1)}Bg`}
            fill
            style={{ objectFit: 'cover', zIndex: 1000 }}

          />
          {pathname === Routes.registration &&
            <SignComments />
          }
        </Grid>
      </Grid>
    </>
  )
}

export default SplitLayout;