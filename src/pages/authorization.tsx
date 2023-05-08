import Head from 'next/head'
import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import {
	Link as LinkMui,
	Box,
	useTheme,
} from '@mui/material'
import Form from '@/components/Form'
import Link from 'next/link'
import { Routes } from '@/constants'
import LayoutSignError from '@/components/LayoutSignError'

type Props = {}

const Authorization = (props: Props) => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const {
		palette: {
			primary: { main },
		},
	} = useTheme()

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
				<LayoutSignError>
					<Grid
						container
						sx={{
							height: 1, flexDirection: 'column', justifyContent: 'center',
							alignContent: 'center',
							alignItems: 'start'
						}}
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
						<Box component={'div'} sx={{ maxWidth: '436px', width: 1 }}>
							<Form
								handleSubmit={handleSubmit}
								email={email}
								setEmail={setEmail}
								password={password}
								setPassword={setPassword}
							/>
							<Box
								component={'div'}
								sx={{
									width: '436px',
									textAlign: 'center',
									mt: 2,
								}}
							>
								<Typography variant='caption' sx={{ display: 'inline' }}>
									Don’t have an account?{' '}
								</Typography>
								<LinkMui
									component={Link}
									href={Routes.registration}
									underline='none'
								>
									<Typography
										variant='caption'
										sx={{ color: main, display: 'inline' }}
									>
										Sign up
									</Typography>
								</LinkMui>
							</Box>
						</Box>
					</Grid>
				</LayoutSignError>
			</main>
		</>
	)
}

export default Authorization
