// basic
import { useState } from 'react';
import Link from 'next/link';

// mui
import Typography from '@mui/material/Typography';
import { Link as LinkMui, Box, useTheme } from '@mui/material';

// components
import SplitLayout from '@/components/Layout/SplitLayout/SplitLayout';
import FormRegistration from '@/components/forms/FormRegistration/FormRegistration';

// constants
import { Routes } from '@/constants';

const Authorization = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const {
    palette: {
      primary: { main },
    },
  } = useTheme();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email && password) {
      console.log(email, password);
      setLoading(true);
      setEmail('');
      setPassword('');
      setTimeout(() => setLoading(false), 3000);
    }
  };

  return (
    <SplitLayout title="Authorization">
      <Typography variant="h2">Welcome back</Typography>
      <Typography
        variant="body1"
        sx={{
          mt: 2,
          mb: 6,
        }}
      >
        Welcome back! Please enter your details to log into your account.
      </Typography>
      <Box component={'div'} sx={{ maxWidth: '436px', width: 1 }}>
        <FormRegistration
          handleSubmit={handleSubmit}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          loading={loading}
        />
        <Box
          component={'div'}
          sx={{
            width: '436px',
            textAlign: 'center',
            mt: 2,
          }}
        >
          <Typography variant="caption" sx={{ display: 'inline' }}>
            Don’t have an account?{' '}
          </Typography>
          <LinkMui component={Link} href={Routes.registration} underline="none">
            <Typography variant="caption" sx={{ color: main, display: 'inline' }}>
              Sign up
            </Typography>
          </LinkMui>
        </Box>
      </Box>
    </SplitLayout>
  );
};

export default Authorization;
