import Head from 'next/head'
import React, { useState } from 'react'
import Image from 'next/image'
import singIn from '../assets/singInBg.png'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import {
	SvgIcon,
	FormControl,
	FormLabel,
	OutlinedInput,
	Link as LinkMui,
	Box,
	Checkbox,
	FormControlLabel,
	Button,
} from '@mui/material'
import Form from '@/components/Form'
import Link from 'next/link'

type Props = {}

const Authorization = (props: Props) => {
	return (
		<>
			<Head>
				<title>Authorization</title>
			</Head>
			<main>
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
					<Grid item sm={6}>
						<Grid
							sx={{ height: 1 }}
							container
							direction='column'
							justifyContent='center'
							alignItems='start'
							alignContent='center'
							wrap='wrap'
						>
							<Typography
								variant='h2'
								color='initial'
								sx={{ fontWeight: 500, fontSize: 45, lineHeight: '52.79px' }}
							>
								Welcome back
							</Typography>
							<Typography
								variant='body1'
								// color="initial"
								// sx={{
								// 	fontWeight: 300,
								// 	fontSize: 15,
								// 	lineHeight: '17.6px',
								// 	color: '#5C5C5C',
								// 	mt: 2,
								// 	mb: 6,
								// }}
							>
								Welcome back! Please enter your details to log into your
								account.
							</Typography>
							<Form action=''>
								<FormControl>
									<FormLabel
										sx={{
											pb: 1,
										}}
										htmlFor='email'
									>
										<Box
											component={'span'}
											sx={{
												fontWeight: 500,
												fontSize: 15,
												lineHeight: '17.6px',
												color: '#494949',
											}}
										>
											Email{' '}
										</Box>
										<Box
											component={'span'}
											sx={{
												fontWeight: 500,
												fontSize: 15,
												lineHeight: '17.6px',
												color: '#FE645E',
											}}
										>
											*
										</Box>
									</FormLabel>
									<OutlinedInput
										sx={{ width: '436px', heigth: '48px', borderRadius: '8px' }}
										size='medium'
										id='email'
										defaultValue='example@mail.com'
									/>
								</FormControl>
								<FormControl sx={{ mt: 3 }}>
									<FormLabel
										sx={{
											pb: 1,
										}}
										htmlFor='password'
									>
										<Box
											component={'span'}
											sx={{
												fontWeight: 500,
												fontSize: 15,
												lineHeight: '17.6px',
												color: '#494949',
											}}
										>
											Password{' '}
										</Box>
										<Box
											component={'span'}
											sx={{
												fontWeight: 500,
												fontSize: 15,
												lineHeight: '17.6px',
												color: '#FE645E',
											}}
										>
											*
										</Box>
									</FormLabel>
									<OutlinedInput
										sx={{ width: '436px', heigth: '48px', borderRadius: '8px' }}
										size='medium'
										id='password'
										defaultValue='at least 8 characters'
									/>
								</FormControl>
								<Box
									component={'div'}
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',
										mt: 1,
									}}
								>
									<FormControlLabel
										control={<Checkbox size='small' />}
										label='Remember me'
									/>

									<LinkMui
										component={Link}
										href='/'
										underline='none'
										sx={{
											fontWeight: 300,
											fontSize: 15,
											lineHeight: '17.6px',
											color: '#FE645E',
										}}
									>
										Forgot password?
									</LinkMui>
								</Box>
								<Button variant='contained' sx={{ mt: 7 }} type='submit'>
									Sign in
								</Button>
							</Form>
								<Box
									component={'p'}
									sx={{
										mx:'auto',
										mt: 2,
									}}
								>
									<Box
										component={'span'}
										sx={{
											fontWeight: 500,
											fontSize: 15,
											lineHeight: '17.6px',
											color: '#494949',
										}}
									>
										Don’t have an account?{' '}
									</Box>
									<LinkMui
										component={Link}
										href='/registration'
										underline='none'
										sx={{
											fontWeight: 500,
											fontSize: 15,
											lineHeight: '18px',
											color: '#FE645E',
										}}
									>
										Sign up
									</LinkMui>
								</Box>
						</Grid>
					</Grid>
					<Grid item sm={6} sx={{ position: 'relative' }}>
						<Image
							src={singIn}
							alt='singIn'
							fill
							style={{ objectFit: 'cover' }}
						/>
					</Grid>
				</Grid>
			</main>
		</>
	)
}

export default Authorization
