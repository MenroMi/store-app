// basic
import React, { useState } from 'react';
import Link from 'next/link';
import { useMutation } from '@tanstack/react-query';

// mui
import Typography from '@mui/material/Typography';
import { Link as LinkMui, Box, useTheme, useMediaQuery } from '@mui/material';
import theme from '@/utils/mui/theme';

// components
import FormRegistration from '@/components/Forms/FormRegistration/FormRegistration';
import InfoComment from '@/components/UI/Comments/InfoComment/InfoCommet';
import AuthLayout from '@/components/Layout/AuthLayout/AuthLayout';

// constants
import { Routes } from '@/constants/routes';
import { registration } from '@/services/authService';
import { IFormData } from '@/types/formDataTypes';

const Registration = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    email: '',
    password: '',
    confirm: '',
    checked: false,
  });
  const { mutate, isLoading, isError, isSuccess } = useMutation(registration);
  const queryDownMd = useMediaQuery<unknown>(theme.breakpoints.down('md'));
  const {
    palette: {
      primary: { main },
    },
  } = useTheme();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, name, confirm, password } = formData;
    if (email && password && name && confirm && password === confirm) {
      mutate({ username: name, email, password }, {
      });
    }
  };

  return (
    <AuthLayout title="Registration">
      {isSuccess ? (
        <InfoComment email={formData.email} />
      ) : (
        <>
          <Typography variant="h2">Create an account</Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              mb: isError ? 0 : 6,
            }}
          >
            Create an account to get an easy access to your dream shopping.
          </Typography>
          {isError && (
            <Typography
              variant="h4Bold"
              sx={{ pb: 2, pt: queryDownMd ? '7.3px' : '1.14px', color: main }}
            >
              This name or email is taken
            </Typography>
          )}
          <Box component={'div'} sx={{ maxWidth: '436px', width: 1 }}>
            <FormRegistration
              handleSubmit={handleSubmit}
              loading={isLoading}
              formData={formData}
              setFormData={setFormData}
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
                Already have an account?{' '}
              </Typography>
              <LinkMui component={Link} href={Routes.login} underline="none">
                <Typography variant="caption" sx={{ color: main, display: 'inline' }}>
                  Log in
                </Typography>
              </LinkMui>
            </Box>
          </Box>
        </>
      )}
    </AuthLayout>
  );
};

export default Registration;
