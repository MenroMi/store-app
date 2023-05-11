import Head from 'next/head'
import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import {
	Link as LinkMui,
	Box,
	useTheme,
} from '@mui/material'
import Link from 'next/link'
import { Routes, comments } from '@/constants'
import Form from '@/components/Form'
import LayoutSignError from '@/components/LayoutSignError'

const Registration = () => {
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
				<LayoutSignError>
					<Grid
						container
						sx={{
							height: 1, flexDirection: 'column', justifyContent: 'center',
							alignContent: 'center',
							alignItems: 'start'
						}}
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
							<Form 
							handleSubmit={handleSubmit} 
							name={name} setName={setName} 
							email={email} 
							setEmail={setEmail} 
							password={password} 
							setPassword={setPassword} 
							confirm={confirm} 
							setConfirm={setConfirm} 
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
				</LayoutSignError>
			</main>
		</>
	)
}

export default Registration
