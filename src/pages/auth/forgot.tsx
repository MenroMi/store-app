// basic
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// mui
import Typography from '@mui/material/Typography';
import { Link as LinkMui, Box } from '@mui/material';

// components
import FormRegistration from '@/components/Forms/FormRegistration/FormRegistration';
import SplitLayout from '@/components/Layout/SplitLayout/SplitLayout';

// constants
import { Routes } from '@/constants';

const Forgot = () => {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email) {
      setLoading(true);
      console.log(email);
      setTimeout(() => {
        router.push(Routes.reset);
        setLoading(false);
      }, 3000);
    }
  };
  return (
    <SplitLayout title="Forgot Password">
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
        <FormRegistration
          handleSubmit={handleSubmit}
          email={email}
          setEmail={setEmail}
          loading={loading}
        />
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
  );
};

export default Forgot;
