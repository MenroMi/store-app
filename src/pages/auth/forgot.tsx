// basic
import { useState } from 'react';
import Link from 'next/link';

// mui
import Typography from '@mui/material/Typography';
import { Link as LinkMui, Box } from '@mui/material';

// components
import FormRegistration from '@/components/Forms/FormRegistration/FormRegistration';
import SplitLayout from '@/components/Layout/SplitLayout/SplitLayout';

// constants
import { Routes } from '@/constants';
import { IFormData } from '@/types/formDataTypes';
import { forgot } from '@/services/authService';
import { useMutation } from '@tanstack/react-query';
import InfoComment from '@/components/UI/Comments/InfoComment/InfoCommet';

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
    <SplitLayout title="Forgot Password">
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
        </>
      )}
    </SplitLayout>
  );
};

export default Forgot;
