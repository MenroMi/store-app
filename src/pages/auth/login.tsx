// basic
import { useState, useContext } from 'react';
import Link from 'next/link';
import { useMutation, useQuery } from '@tanstack/react-query';
import { login } from '@/services/authService';
import { useRouter } from 'next/router';

// mui
import Typography from '@mui/material/Typography';
import { Link as LinkMui, Box, useTheme, useMediaQuery } from '@mui/material';
import theme from '@/utils/mui/theme';

// components
import SplitLayout from '@/components/Layout/SplitLayout/SplitLayout';
import FormRegistration from '@/components/Forms/FormRegistration/FormRegistration';

// constants
import { Routes } from '@/constants';
import { AuthUserContext } from '@/components/Providers/auth';

const Authorization = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);
  const { setUserToken } = useContext(AuthUserContext);
  const { push } = useRouter();
  const { mutate, isLoading, isError } = useMutation(login);

  const queryDownMd = useMediaQuery<unknown>(theme.breakpoints.down('md'));
  const {
    palette: {
      primary: { main },
    },
  } = useTheme();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email && password) {
      mutate(
        { identifier: email, password },
        {
          onSuccess: (data) => {
            if (checked) {
              localStorage.setItem('token', data.jwt);
              setUserToken(localStorage.getItem('token'));
            } else {
              sessionStorage.setItem('token', data.jwt);
              setUserToken(sessionStorage.getItem('token'));
            }
            push(Routes.home);
          },
        }
      );
    }
  };
  console.log(checked);

  return (
    <SplitLayout title="Login">
      <Typography variant="h2">Welcome back</Typography>
      <Typography
        variant="body1"
        sx={{
          mt: 2,
          mb: isError ? 0 : 6,
        }}
      >
        Welcome back! Please enter your details to log into your account.
      </Typography>
      {isError && (
        <Typography
          variant="h4Bold"
          sx={{ pb: 2, pt: queryDownMd ? '7.3px' : '1.14px', color: main }}
        >
          Incorrect Email or Password
        </Typography>
      )}
      <Box component={'div'} sx={{ maxWidth: '436px', width: 1 }}>
        <FormRegistration
          handleSubmit={handleSubmit}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          checked={checked}
          setChecked={setChecked}
          loading={isLoading}
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
          <LinkMui component={Link} href={Routes.register} underline="none">
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
