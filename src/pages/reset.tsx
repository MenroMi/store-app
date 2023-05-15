// basic
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// mui
import Typography from '@mui/material/Typography';
import { Link as LinkMui, Box, useTheme } from '@mui/material';

// components
import SplitLayout from '@/components/Layout/SplitLayout/SplitLayout';
import FormRegistration from '@/components/forms/FormRegistration/FormRegistration';

// constants
import { Routes } from '@/constants';

const Reset = () => {
  const [password, setPassword] = useState<string>('');
  const [confirm, setConfirm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const {
    palette: {
      primary: { main },
    },
  } = useTheme();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password && confirm && password === confirm) {
      setLoading(true);
      setTimeout(() => {
        console.log(password, confirm);
        router.push(Routes.authorization);
        setLoading(false);
      }, 3000);
    }
  };
  return (
    <SplitLayout title="Reset Password">
      <Typography variant="h2">Reset password</Typography>
      <Typography
        variant="body1"
        sx={{
          mt: 2,
          mb: 6,
        }}
      >
        Please create new password here.
      </Typography>
      <Box component={'div'} sx={{ maxWidth: '436px', width: 1 }}>
        <FormRegistration
          handleSubmit={handleSubmit}
          password={password}
          setPassword={setPassword}
          confirm={confirm}
          setConfirm={setConfirm}
          loading={loading}
        />
        <LinkMui
          component={Link}
          href={Routes.authorization}
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
  );
};

export default Reset;
