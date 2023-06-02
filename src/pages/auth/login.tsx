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
import FormRegistration from '@/components/Forms/FormRegistration/FormRegistration';
import AuthLayout from '@/components/Layout/AuthLayout/AuthLayout';
import Notification from '@/components/UI/Notification/Notificaton';

// constants
import { Routes } from '@/constants/routes';
import { IFormData } from '@/types/formDataTypes';
import { UserContext } from '@/providers/user';
import { getUser } from '@/services/userService';
import { NotificationContext } from '@/providers/notification';

const Authorization = () => {
  const [formData, setFormData] = useState<IFormData>({
    email: '',
    password: '',
    checked: false,
  });
  const { setUser } = useContext(UserContext);
  const { setIsOpen, setIsFailed, setMessage } = useContext(NotificationContext);
  const { mutate, isError } = useMutation(login);
  const { mutate: userMutate } = useMutation(getUser);
  const [loading, setLoading] = useState<boolean>(false);

  const { push } = useRouter();
  const queryDownMd = useMediaQuery<unknown>(theme.breakpoints.down('md'));
  const {
    palette: {
      primary: { main },
    },
  } = useTheme();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password, checked } = formData;
    if (email && password) {
      setLoading(true);
      mutate(
        { identifier: email, password },
        {
          onError: () => setLoading(false),
          onSuccess: (data) => {
            checked
              ? localStorage.setItem('token', data.jwt)
              : sessionStorage.setItem('token', data.jwt);

            userMutate(data.jwt, {
              onSuccess: async (data) => {
                setUser(data);
                await push(Routes.myProducts);
                setIsOpen(true);
                setIsFailed(false);
                setMessage("You've succesfully logged in");
              },
              onError: () => {
                setIsOpen(true);
                setIsFailed(true);
                setMessage('Something went wrong: failed to log in');
              },
            });
          },
        }
      );
    }
  };

  return (
    <AuthLayout title="Login">
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
          loading={loading}
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

      <Notification />
    </AuthLayout>
  );
};

export default Authorization;
