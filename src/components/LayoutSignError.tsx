import { Grid, SvgIcon } from '@mui/material'
import Image from 'next/image'
import logo from '../assets/icons/logo.svg'
import { useRouter } from 'next/router'
import React from 'react'
import { Routes, getImage } from '@/constants'
import SignComments from './SignComments'



type ILayoutSignError = {
  children: React.ReactNode,
}

const LayoutSignError = ({ children }: ILayoutSignError) => {
  const { pathname } = useRouter()
  return (
    <>
      {(pathname === Routes.authorization || pathname === Routes.registration || pathname === Routes.forgot || pathname === Routes.reset) &&
        < Image src={logo} alt={'logoIcon'} style={{ position: 'absolute', top: 50, left: 40 }} />
      }
      <Grid container sx={{ height: 1 }}>
        <Grid item sm={6}>{children}</Grid>
        <Grid item sm={6} sx={{ position: 'relative' }}>
          <Image
            // src={
            //   pathname === Routes.registration ? singUp : pathname === Routes.authorization ? singIn : forgotResetBg
            // }
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

export default LayoutSignError