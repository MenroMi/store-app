// basic
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// mui
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link as LinkMui, Box } from '@mui/material';

// components
import Form from '@/components/Forms/FormRegistration/FormRegistration';
import SplitLayout from '@/components/Layout/SplitLayout/SplitLayout';

// constants
import { Routes } from '@/constants';

const Forgot = () => {
  const [email, setEmail] = useState<string>('');
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email) {
      console.log(email);
      router.push(Routes.reset);
    }
  };
  return (
    <>
      <Head>
        <title>Forgot Password</title>
      </Head>
      <main>
        <SplitLayout>
          <Typography variant="h2">Forgot password?</Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              mb: 6,
            }}
          >
            Don’t worry, we’ll send you reset instructions.
          </Typography>
          <Box component={'div'} sx={{ maxWidth: '436px', width: 1 }}>
            <Form handleSubmit={handleSubmit} email={email} setEmail={setEmail} />
            <LinkMui
              component={Link}
              href={Routes.login}
              underline="none"
              sx={{
                display: 'block',
                textAlign: 'center',
                width: '436px',
                mt: 2,
              }}
            >
              <Typography variant="caption">Back to log in</Typography>
            </LinkMui>
          </Box>
        </SplitLayout>
      </main>
    </>
  );
};

export default Forgot;
