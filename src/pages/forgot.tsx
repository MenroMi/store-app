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
} from '@mui/material'
import Form from '@/components/Form'
import Link from 'next/link'
import { Routes } from '@/constants'
import { useRouter } from 'next/router'

type Props = {}

const Forgot = (props: Props) => {
  const [email, setEmail] = useState<string>('')
  const router = useRouter()
	
	const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (email) {
			console.log(email)
      router.push(Routes.reset)
			setEmail('')
		}
	}
  	return (
			<>
				<Head>
					<title>Forgot Password</title>
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
								<Typography variant='h2'>Forgot password?</Typography>
								<Typography
									variant='body1'
									sx={{
										mt: 2,
										mb: 6,
									}}
								>
									Don’t worry, we’ll send you reset instructions.
								</Typography>
								<Form action='' onSubmit={handleSubmit}>
									<FormControl>
										<FormLabel htmlFor='email'>
											<Typography variant='body2' sx={{ display: 'inline' }}>
												Email
											</Typography>
										</FormLabel>
										<OutlinedInput
											sx={{ width: '436px', mt: 1 }}
											id='email'
											placeholder='Enter your email'
											required
											type='email'
											value={email}
											onChange={e => setEmail(e.target.value)}
										/>
									</FormControl>
									<Button variant='contained' sx={{ mt: '20px' }} type='submit'>
										Reset password
									</Button>
								</Form>
								<Box
									component={'div'}
									sx={{
										mx: 'auto',
										mt: 2,
									}}
								>
									<LinkMui
										component={Link}
										href={Routes.authorization}
										underline='none'
									>
										<Typography
											variant='body2'
										>
											Back to log in
										</Typography>
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

export default Forgot