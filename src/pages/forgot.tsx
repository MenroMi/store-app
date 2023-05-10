import Head from 'next/head'
import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import {
	Link as LinkMui,
	Box,
} from '@mui/material'
import Form from '@/components/Form'
import Link from 'next/link'
import { Routes } from '@/constants'
import { useRouter } from 'next/router'
import LayoutSignError from '@/components/LayoutSignError'

const Forgot = () => {
	const [email, setEmail] = useState<string>('')
	const router = useRouter()

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (email) {
			console.log(email)
			router.push(Routes.reset)
		}
	}
	return (
		<>
			<Head>
				<title>Forgot Password</title>
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
						<Box 
						component={'div'} 
						sx={{ maxWidth: '436px', width: 1 }}
						>
							<Form
								handleSubmit={handleSubmit}
								email={email}
								setEmail={setEmail}
							/>
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
								<Typography variant='caption'>
									Back to log in
								</Typography>
							</LinkMui>
						</Box>
					</Grid>
				</LayoutSignError>
			</main>
		</>
	)
}

export default Forgot
