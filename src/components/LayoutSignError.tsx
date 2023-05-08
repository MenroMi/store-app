import { Grid, SvgIcon } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import singUp from '../assets/singUpBg.png'
import singIn from '../assets/singInBg.png'
import forgotResetBg from '../assets/forgotResetBg.png'
import { Routes } from '@/constants'



type ILayoutSignError = {
  children: React.ReactNode,
}

const LayoutSignError = ({ children }: ILayoutSignError) => {
  const { pathname } = useRouter()
  return (
    <>
      <SvgIcon
        width='40'
        height='30'
        viewBox='0 0 40 30'
        fill='black'
        xmlns='http://www.w3.org/2000/svg'
        sx={{ position: 'absolute', top: 50, left: 40 }}
      >
        <ellipse
          cx='3.83763'
          cy='3.83501'
          rx='3.83763'
          ry='3.83501'
          transform='matrix(0.866321 0.499488 -0.500512 0.86573 3.83887 1.91699)'
        />
        <ellipse
          cx='3.83763'
          cy='3.83501'
          rx='3.83763'
          ry='3.83501'
          transform='matrix(0.866321 0.499488 -0.500512 0.86573 33.3507 0)'
        />
        <rect
          width='7.4354'
          height='20.1338'
          rx='3.7177'
          transform='matrix(0.866321 0.499488 -0.500512 0.86573 28.3121 8.85571)'
        />
        <rect
          width='7.4354'
          height='29.961'
          rx='3.7177'
          transform='matrix(0.866321 0.499488 -0.500512 0.86573 18.7148 0.209839)'
        />
      </SvgIcon>
      <Grid container sx={{ height: 1 }}>
        <Grid item sm={6}>{children}</Grid>
        <Grid item sm={6} sx={{ position: 'relative' }}>
          <Image
            src={
              pathname === Routes.registration ? singUp : pathname === Routes.authorization ? singIn : forgotResetBg
            }
            alt={`${pathname.slice(1)}Bg`}
            fill
            style={{ objectFit: 'cover', zIndex: 1000 }}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default LayoutSignError