import Head from 'next/head'
import React, { useState } from 'react'
import Image from 'next/image'
import singUp from '../assets/singUpBg.png'
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
	useTheme,
} from '@mui/material'
import Form from '@/components/Form'
import Link from 'next/link'
import { Routes, comments } from '@/constants'

type Props = {}

const Registration = (props: Props) => {
	const [email, setEmail] = useState<string>('')
	const [name, setName] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [confirm, setConfirm] = useState<string>('')
	const {
		palette: {
			primary: { main },
		},
	} = useTheme()

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (email && password && name && confirm && password === confirm) {
			console.log(email, password, name, confirm)
		}
	}
	return (
		<>
			<Head>
				<title>Registration</title>
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
							alignContent='center'
							alignItems='start'

						>
							<Typography variant='h2'>Create an account</Typography>
							<Typography
								variant='body1'
								sx={{
									mt: 2,
									mb: 6,
								}}
							>
								Create an account to get an easy access to your dream shopping.
							</Typography>
							<Box component={'div'} sx={{ maxWidth: '436px', width: 1 }}>
								<Form action='' onSubmit={handleSubmit}>
									<FormControl>
										<FormLabel htmlFor='name'>
											<Typography variant='caption' sx={{ display: 'inline' }}>
												Name{' '}
											</Typography>
											<Typography
												variant='caption'
												sx={{ display: 'inline', color: main }}
											>
												*
											</Typography>
										</FormLabel>
										<OutlinedInput
											sx={{ width: '436px', mt: 1 }}
											id='name'
											placeholder='Hayman Andrews'
											required
											type='text'
											value={name}
											onChange={e => setName(e.target.value)}
										/>
									</FormControl>
									<FormControl sx={{ mt: 3 }}>
										<FormLabel htmlFor='email'>
											<Typography variant='caption' sx={{ display: 'inline' }}>
												Email{' '}
											</Typography>
											<Typography
												variant='caption'
												sx={{ display: 'inline', color: main }}
											>
												*
											</Typography>
										</FormLabel>
										<OutlinedInput
											sx={{ width: '436px', mt: 1 }}
											id='email'
											placeholder='example@mail.com'
											required
											type='email'
											value={email}
											onChange={e => setEmail(e.target.value)}
										/>
									</FormControl>
									<FormControl sx={{ mt: 3 }}>
										<FormLabel htmlFor='password'>
											<Typography variant='caption' sx={{ display: 'inline' }}>
												Password{' '}
											</Typography>
											<Typography
												variant='caption'
												sx={{ display: 'inline', color: main }}
											>
												*
											</Typography>
										</FormLabel>
										<OutlinedInput
											sx={{ width: '436px', mt: 1 }}
											id='password'
											required
											placeholder='at least 8 characters'
											type='password'
											inputProps={{ minLength: 8 }}
											onChange={e => setPassword(e.target.value)}
											value={password}
										/>
									</FormControl>
									<FormControl sx={{ mt: 3 }}>
										<FormLabel htmlFor='confirm'>
											<Typography variant='caption' sx={{ display: 'inline' }}>
												Confirm password{' '}
											</Typography>
											<Typography
												variant='caption'
												sx={{ display: 'inline', color: main }}
											>
												*
											</Typography>
										</FormLabel>
										<OutlinedInput
											sx={{ width: '436px', mt: 1 }}
											id='confirm'
											required
											placeholder='at least 8 characters'
											type='password'
											inputProps={{
												minLength: 8,
												title: `passwords don't match`,
												pattern: `${password}`,
											}}
											onChange={e => setConfirm(e.target.value)}
											value={confirm}
										/>
									</FormControl>
									<FormControlLabel
										control={<Checkbox size='small' />}
										label={<Typography variant='caption'>Remember me</Typography>}
										sx={{ mt: 2 }}
									/>
									<Button variant='contained' sx={{ mt: 6 }} type='submit'>
										Sign up
									</Button>
								</Form>
								<Box
									component={'div'}
									sx={{
										width: '436px',
										textAlign: 'center',
										mt: 2,
									}}
								>
									<Typography variant='caption' sx={{ display: 'inline' }}>
										Already have an account?{' '}
									</Typography>
									<LinkMui
										component={Link}
										href={Routes.authorization}
										underline='none'
									>
										<Typography
											variant='caption'
											sx={{ color: main, display: 'inline' }}
										>
											Log in
										</Typography>
									</LinkMui>
								</Box>
							</Box>
						</Grid>
					</Grid>
					<Grid item sm={6} sx={{ position: 'relative' }}>
						<Image
							src={singUp}
							alt='singUp'
							fill
							style={{ objectFit: 'cover', zIndex: 1000 }}
						/>
						<Box
							component={'div'}
							sx={{
								position: 'absolute',
								zIndex: 'tooltip',
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
								bottom: '255px',
							}}
						>
							<Box
								component={'section'}
								sx={{
									width: '756px',
									height: '317px',
									backdropFilter: 'blur(12px)',
									border: '2px solid',
									borderRadius: 4,
									px: 8, py: 7
								}}
							>
								<Box component={'div'}>
									<Typography variant='h4'>
										{`"${comments[0].text}"`}
									</Typography>
									<Box component={'div'}>
									</Box>
									<Typography variant='body1'
									>
										{`"${comments[0].text}"`}
									</Typography>
								</Box>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</main>
		</>
	)
}

export default Registration
