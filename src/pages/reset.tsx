import Head from 'next/head'
import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Link as LinkMui, Box, useTheme } from '@mui/material'
import Form from '@/components/Form'
import Link from 'next/link'
import { Routes } from '@/constants'
import { useRouter } from 'next/router'
import LayoutSignError from '@/components/LayoutSignError'

const Reset = () => {
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
				<LayoutSignError>
					<Grid
						container
						sx={{
							height: 1,
							flexDirection: 'column',
							justifyContent: 'center',
							alignContent: 'center',
							alignItems: 'start',
						}}
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
							<Form
								handleSubmit={handleSubmit}
								password={password}
								setPassword={setPassword}
								confirm={confirm}
								setConfirm={setConfirm}
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
								<Typography variant='caption'>Back to log in</Typography>
							</LinkMui>
						</Box>
					</Grid>
				</LayoutSignError>
			</main>
		</>
	)
}

export default Reset
