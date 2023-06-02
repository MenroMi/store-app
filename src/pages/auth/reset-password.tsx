// basic
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// mui
import Typography from '@mui/material/Typography';
import { Link as LinkMui, Box, useTheme } from '@mui/material';

// components
import FormRegistration from '@/components/Forms/FormRegistration/FormRegistration';

// constants
import { Routes } from '@/constants/routes';
import { IFormData } from '@/types/formDataTypes';
import { useMutation } from '@tanstack/react-query';
import { reset } from '@/services/authService';
import InfoComment from '@/components/UI/Comments/InfoComment/InfoCommet';
import Notification from '@/components/UI/Notification/Notificaton';
import { NotificationContext } from '@/providers/notification';
import AuthLayout from '@/components/Layout/AuthLayout/AuthLayout';

const Reset = () => {
  const [formData, setFormData] = useState<IFormData>({
    password: '',
    confirm: '',
  });
  const { mutate, isError } = useMutation(reset);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    query: { code = '' },
    push,
  } = useRouter();
  const {
    palette: {
      primary: { main },
    },
  } = useTheme();

  const { setIsOpen, setIsFailed, setMessage } = useContext(NotificationContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { password, confirm } = formData;
    if (password && confirm && password === confirm) {
      setLoading(true);
      mutate(
        { password, passwordConfirmation: confirm, code },
        {
          onError: () => {
            setLoading(false);
          },
          onSuccess: () => {
            setIsOpen(true);
            setIsFailed(false);
            setMessage("You've succesfully changed your password");
            push(Routes.login);
          },
        }
      );
    }
  };
  return (
    <AuthLayout title="Reset Password">
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
              loading={loading}
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

      <Notification />
    </AuthLayout>
  );
};

export default Reset;
