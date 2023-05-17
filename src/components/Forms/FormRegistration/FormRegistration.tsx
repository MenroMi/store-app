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
import { Routes } from '@/constants';

// interface
import { IFormProps } from '@/types/formTypes';
import ButtonLoader from '@/components/UI/ButtonLoader/ButtonLoader';
import { ChangeEvent } from 'react';

const FormMui = styled('form')({
  display: 'flex',
  flexDirection: 'column',
});

const FormRegistration = ({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
  name,
  setName,
  confirm,
  setConfirm,
  checked,
  setChecked,
  loading,
}: IFormProps) => {
  const { pathname } = useRouter();
  const {
    palette: {
      primary: { main },
    },
  } = useTheme<Theme>();

  return (
    <FormMui action="" onSubmit={handleSubmit}>
      <Box component={'div'} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {setName && (
          <FormControl>
            <FormLabel htmlFor="name">
              <Typography variant="caption" sx={{ display: 'inline' }}>
                Name{' '}
              </Typography>
              <Typography variant="caption" sx={{ display: 'inline', color: main }}>
                *
              </Typography>
            </FormLabel>
            <OutlinedInput
              sx={{ maxWidth: '436px', mt: 1 }}
              id="name"
              placeholder="Hayman Andrews"
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
        )}
        {setEmail && (
          <FormControl>
            <FormLabel htmlFor="email">
              <Typography variant="caption" sx={{ display: 'inline' }}>
                Email{' '}
              </Typography>
              <Typography variant="caption" sx={{ display: 'inline', color: main }}>
                *
              </Typography>
            </FormLabel>
            <OutlinedInput
              sx={{ maxWidth: '436px', mt: 1 }}
              id="email"
              placeholder="example@mail.com"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
        )}
        {setPassword && (
          <FormControl>
            <FormLabel htmlFor="password">
              <Typography variant="caption" sx={{ display: 'inline' }}>
                Password{' '}
              </Typography>
              <Typography variant="caption" sx={{ display: 'inline', color: main }}>
                *
              </Typography>
            </FormLabel>
            <OutlinedInput
              sx={{ maxWidth: '436px', mt: 1 }}
              id="password"
              required
              placeholder="at least 8 characters"
              type="password"
              inputProps={{ minLength: 8 }}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </FormControl>
        )}
        {setConfirm && (
          <FormControl>
            <FormLabel htmlFor="confirm">
              <Typography variant="caption" sx={{ display: 'inline' }}>
                Confirm password{' '}
              </Typography>
              <Typography variant="caption" sx={{ display: 'inline', color: main }}>
                *
              </Typography>
            </FormLabel>
            <OutlinedInput
              sx={{ maxWidth: '436px', mt: 1 }}
              id="confirm"
              required
              placeholder="at least 8 characters"
              type="password"
              inputProps={{
                minLength: 8,
                title: `passwords don't match`,
                pattern: `${password}`,
              }}
              onChange={(e) => setConfirm(e.target.value)}
              value={confirm}
            />
          </FormControl>
        )}
      </Box>
      {/* {setEmail && setPassword &&  */}
      {(pathname === Routes.login || pathname === Routes.register) && (
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
                size="small"
                checked={checked}
                onChange={(e) => setChecked && setChecked(e.target.checked)}
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
