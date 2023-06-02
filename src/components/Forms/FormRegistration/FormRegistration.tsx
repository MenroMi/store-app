// basic
import Link from 'next/link';
import { useRouter } from 'next/router';

// mui
import styled from '@emotion/styled';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  OutlinedInput,
  Typography,
  useTheme,
  Theme,
  Link as LinkMui,
} from '@mui/material';

// constants
import { Routes } from '@/constants/routes';

// interface
import { IFormProps } from '@/types/formTypes';
import ButtonLoader from '@/components/UI/Buttons/ButtonLoader/ButtonLoader';
import { ChangeEvent } from 'react';
import { AUTH_INPUTS } from '@/constants/ui';
import { IRegistration } from '@/types';

const FormMui = styled('form')({
  display: 'flex',
  flexDirection: 'column',
});

const FormRegistration = ({ handleSubmit, formData = {}, setFormData, loading }: IFormProps) => {
  const { pathname } = useRouter();
  const {
    palette: {
      primary: { main },
    },
  } = useTheme<Theme>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.id === 'checked' ? e.target.checked : e.target.value,
    }));
  };

  return (
    <FormMui action="" onSubmit={handleSubmit}>
      <Box component={'div'} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {AUTH_INPUTS.filter(input => Object.keys(formData).includes(input.id)).map(({ id, placeholder, label, type }) => (
          <FormControl key={id}>
            <FormLabel htmlFor={id}>
              <Typography variant="caption" sx={{ display: 'inline' }}>{label}{' '}</Typography>
              <Typography variant="caption" sx={{ display: 'inline', color: main }}>
                *
              </Typography>
            </FormLabel>
            <OutlinedInput
              sx={{ mt: 1 }}
              id={id}
              placeholder={placeholder}
              required
              type={type}
              autoComplete={(id === 'password' || id === 'confirm') ? "current-password" : "on"}
              inputProps={{
                minLength: (id === 'password' || id === 'confirm') ? 8 : 0,
                title: id === 'confirm' ? `passwords don't match` : undefined,
                pattern: id === 'confirm' ? `${formData.password}` : undefined,
              }}
              value={formData[id as keyof IRegistration]}
              onChange={handleChange}
            />
          </FormControl>
        ))}
      </Box>
      {pathname === Routes.login && (
        <Box
          component={'div'}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: 2,
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                id="checked"
                size="small"
                checked={formData.checked}
                onChange={handleChange}
              />
            }
            label={<Typography variant="caption">Remember me</Typography>}
          />
          {pathname === Routes.login && (
            <LinkMui component={Link} href={Routes.forgot} underline="none">
              <Typography variant="body1" sx={{ color: main }}>
                Forgot password?
              </Typography>
            </LinkMui>
          )}
        </Box>
      )}
      <Button
        variant="contained"
        disabled={loading && true}
        sx={{ mt: pathname === Routes.login || pathname === Routes.register ? 6 : '20px' }}
        type="submit"
      >
        {loading ? (
          <ButtonLoader />
        ) : pathname === Routes.register ? (
          'Sign up'
        ) : pathname === Routes.login ? (
          'Sign in'
        ) : (
          'Reset password'
        )}
      </Button>
    </FormMui>
  );
};

export default FormRegistration;
