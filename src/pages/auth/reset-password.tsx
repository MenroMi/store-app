// basic
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// mui
import Typography from '@mui/material/Typography';
import { Link as LinkMui, Box, useTheme } from '@mui/material';

// components
import SplitLayout from '@/components/Layout/SplitLayout/SplitLayout';
import FormRegistration from '@/components/Forms/FormRegistration/FormRegistration';
import FullScreenLoader from '@/components/UI/Loader/FullScreenLoader';

// constants
import { Routes } from '@/constants/routes';
import { IFormData } from '@/types/formDataTypes';
import { useMutation } from '@tanstack/react-query';
import { reset } from '@/services/authService';
import InfoComment from '@/components/UI/Comments/InfoComment/InfoCommet';

const Reset = () => {
  const [formData, setFormData] = useState<IFormData>({
    password: '',
    confirm: '',
  });
  const { mutate, isLoading, isError } = useMutation(reset);

  const {
    query: { code = '' },
    push,
  } = useRouter();
  const {
    palette: {
      primary: { main },
    },
  } = useTheme();

  if (isLoading) return (
    <FullScreenLoader />
  )

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { password, confirm } = formData;
    if (password && confirm && password === confirm) {
      mutate(
        { password, passwordConfirmation: confirm, code },
        {
          onSuccess: () => {
            push(Routes.login);
          },
        }
      );
    }
  };
  return (
    <SplitLayout title="Reset Password">
      {isError ? (
        <InfoComment />
      ) : (
        <>
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
              formData={formData}
              setFormData={setFormData}
              loading={isLoading}
            />
            <LinkMui
              component={Link}
              href={Routes.login}
              underline="none"
              sx={{
                display: 'block',
                textAlign: 'center',
                maxWidth: '436px',
                mt: 2,
              }}
            >
              <Typography variant="caption">Back to log in</Typography>
            </LinkMui>
          </Box>
        </>
      )}
    </SplitLayout>
  );
};

export default Reset;
