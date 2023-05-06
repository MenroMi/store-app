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
	useTheme,
} from '@mui/material'
import Form from '@/components/Form'
import Link from 'next/link'

type Props = {}

const Authorization = (props: Props) => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const {palette:{primary:{main}}} = useTheme()
	
	const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (email && password) {
			console.log(email, password)
			setEmail('')
			setPassword('')
		}
	}

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
							<Typography variant='h2'>Welcome back</Typography>
							<Typography
								variant='body1'
								sx={{
									mt: 2,
									mb: 6,
								}}
							>
								Welcome back! Please enter your details to log into your
								account.
							</Typography>
							<Form action='' onSubmit={handleSubmit}>
								<FormControl>
									<FormLabel htmlFor='email'>
										<Typography variant='body2' sx={{ display: 'inline' }}>
											Email{' '}
										</Typography>
										<Typography
											variant='body2'
											sx={{ display: 'inline', color: main}}
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
									<FormLabel htmlFor='email'>
										<Typography variant='body2' sx={{ display: 'inline' }}>
											Password{' '}
										</Typography>
										<Typography
											variant='body2'
											sx={{ display: 'inline', color: '#FE645E' }}
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
								<Box
									component={'div'}
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',
										mt: 2,
									}}
								>
									<FormControlLabel
										control={<Checkbox size='small' />}
										label={<Typography variant='body2'>Remember me</Typography>}
										sx={{ px: '0px' }}
									/>
									<LinkMui component={Link} href='/' underline='none'>
										<Typography variant='body1' sx={{ color: main }}>
											Forgot password?
										</Typography>
									</LinkMui>
								</Box>
								<Button variant='contained' sx={{ mt: 6 }} type='submit'>
									Sign in
								</Button>
							</Form>
							<Box
								component={'div'}
								sx={{
									mx: 'auto',
									mt: 2,
								}}
							>
								<Typography variant='body2' sx={{ display: 'inline' }}>
									Forgot password?{' '}
								</Typography>
								<LinkMui component={Link} href='/registration' underline='none'>
									<Typography
										variant='body2'
										sx={{ color: {main}, display: 'inline' }}
									>
										Sign up
									</Typography>
								</LinkMui>
							</Box>
						</Grid>
					</Grid>
					<Grid item sm={6} sx={{ position: 'relative' }}>
						<Image
							src={singIn}
							alt='singIn'
							fill
							sizes='100vw,50vw,33vw'
							priority
							style={{ objectFit: 'cover' }}
						/>
					</Grid>
				</Grid>
			</main>
		</>
	)
}

export default Authorization
