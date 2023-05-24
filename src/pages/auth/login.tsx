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
import FullScreenLoader from '@/components/UI/Loader/FullScreenLoader';

// constants
import { Routes } from '@/constants/routes';
import { IFormData } from '@/types/formDataTypes';
import { UserContext } from '@/components/Providers/user';
import { getUser } from '@/services/userService';

const Authorization = () => {
  const [formData, setFormData] = useState<IFormData>({
    email: '',
    password: '',
    checked: false,
  });
  const { setUser } = useContext(UserContext);
  const { mutate, isLoading, isError } = useMutation(login);
  const { mutate:userMutate } = useMutation(getUser);

  const { push } = useRouter();
  const queryDownMd = useMediaQuery<unknown>(theme.breakpoints.down('md'));
  const {
    palette: {
      primary: { main },
    },
  } = useTheme();

  if (isLoading) return (
    <FullScreenLoader />
  )

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password, checked } = formData;
    if (email && password) {
      mutate(
        { identifier: email, password },
        {
          onSuccess: (data) => {
            checked
              ? localStorage.setItem('token', data.jwt)
              : sessionStorage.setItem('token', data.jwt);

            userMutate(data.jwt, {
              onSuccess: (data) => {
                setUser(data);
                push(Routes.myProducts);
              },
            });
          },
        }
      );
    }
  };

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
          formData={formData}
          setFormData={setFormData}
          loading={isLoading}
        />
        <Box
          component={'div'}
          sx={{
            maxWidth: '436px',
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
