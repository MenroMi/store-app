// basic
import React, { useState } from 'react';
import Link from 'next/link';

// mui
import Typography from '@mui/material/Typography';
import { Link as LinkMui, Box, useTheme } from '@mui/material';

// components
import FormRegistration from '@/components/Forms/FormRegistration/FormRegistration';
import SplitLayout from '@/components/Layout/SplitLayout/SplitLayout';

// constants
import { Routes } from '@/constants';

const Registration = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirm, setConfirm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const {
    palette: {
      primary: { main },
    },
  } = useTheme();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    if (email && password && name && confirm && password === confirm) {
      console.log(email, password, name, confirm);
    }
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <SplitLayout title="Registration">
      <Typography variant="h2">Create an account</Typography>
      <Typography
        variant="body1"
        sx={{
          mt: 2,
          mb: 6,
        }}
      >
        Create an account to get an easy access to your dream shopping.
      </Typography>
      <Box component={'div'} sx={{ maxWidth: '436px', width: 1 }}>
        <FormRegistration
          handleSubmit={handleSubmit}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirm={confirm}
          setConfirm={setConfirm}
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
            Already have an account?{' '}
          </Typography>
          <LinkMui component={Link} href={Routes.login} underline="none">
            <Typography variant="caption" sx={{ color: main, display: 'inline' }}>
              Log in
            </Typography>
          </LinkMui>
        </Box>
      </Box>
    </SplitLayout>
  );
};

export default Registration;
