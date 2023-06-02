// basic
import { useState } from 'react';
import Link from 'next/link';

// mui
import Typography from '@mui/material/Typography';
import { Link as LinkMui, Box } from '@mui/material';

// components
import FormRegistration from '@/components/Forms/FormRegistration/FormRegistration';
import AuthLayout from '@/components/Layout/AuthLayout/AuthLayout';
import InfoComment from '@/components/UI/Comments/InfoComment/InfoCommet';

// constants
import { Routes } from '@/constants/routes';
import { IFormData } from '@/types/formDataTypes';
import { forgot } from '@/services/authService';
import { useMutation } from '@tanstack/react-query';

const Forgot = () => {
  const [formData, setFormData] = useState<IFormData>({
    email: '',
  });
  const { mutate, isLoading, isSuccess } = useMutation(forgot);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email } = formData;
    email && mutate({ email });
  };
  return (
    <AuthLayout title="Forgot Password">
      {isSuccess ? (
        <InfoComment email={formData.email} />
      ) : (
        <>
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
              <LinkMui component={Link} href={Routes.login} underline="none">
                <Typography variant="caption" sx={{ display: 'inline' }}>
                  Back to log in
                </Typography>
              </LinkMui>
            </Box>
          </Box>
        </>
      )}
    </AuthLayout>
  );
};

export default Forgot;
