import Head from 'next/head'
import React, { useState } from 'react'
import Image from 'next/image'
import forgotResetBg from '../assets/forgotResetBg.png'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import {
	SvgIcon,
	FormControl,
	FormLabel,
	OutlinedInput,
	Link as LinkMui,
	Box,
	Button,
	useTheme,
} from '@mui/material'
import Form from '@/components/Form'
import Link from 'next/link'
import { Routes } from '@/constants'
import { useRouter } from 'next/router'

type Props = {}

const Reset = (props: Props) => {
	const [password, setPassword] = useState<string>('')
	const [confirm, setConfirm] = useState<string>('')
	const router = useRouter()
	const {
		palette: {
			primary: { main },
		},
	} = useTheme()

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (password && confirm && password === confirm) {
			console.log(password, confirm)
			router.push(Routes.authorization)
		}
	}
	return (
		<>
			<Head>
				<title>Reset Password</title>
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
							<Typography variant='h2'>Reset password</Typography>
							<Typography
								variant='body1'
								sx={{
									mt: 2,
									mb: 6,
								}}
							>
								Please create new password here.
							</Typography>
							<Box component={'div'} sx={{ maxWidth: '436px', width: 1 }}>
								<Form action='' onSubmit={handleSubmit}>
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
									<Button variant='contained' sx={{ mt: '20px' }} type='submit'>
										Reset password
									</Button>
								</Form>
								<LinkMui
									component={Link}
									href={Routes.authorization}
									underline='none'
									sx={{
										display: 'block',
										textAlign: 'center',
										mt: 2,
									}}

								>
									<Typography variant='caption'>Back to log in</Typography>
								</LinkMui>
							</Box>
						</Grid>
					</Grid>
					<Grid item sm={6} sx={{ position: 'relative' }}>
						<Image
							src={forgotResetBg}
							alt='forgotResetBg'
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

export default Reset
