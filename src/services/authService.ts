import { baseURL } from '@/constants/urls';
import axios from 'axios';

interface LoginProps {
  identifier: string;
  password: string;
}

interface ForgotProps {
  email: string;
}

interface ResetProps {
  password: string;
  passwordConfirmation: string;
  code: string | string[];
}

interface RegistrationProps {
  username: string;
  password: string;
  email: string;
}

export const login = async (params: LoginProps) => {
  const response = await axios.post(
    `${baseURL}auth/local`,
    params
  );
  return response.data;
};

export const registration = async (params: RegistrationProps) => {
  const response = await axios.post(
    `${baseURL}auth/local/register`,
    params
  );
  return response.data;
};

export const forgot = async (params:ForgotProps) => {
  const response = await axios.post(
    `${baseURL}auth/forgot-password`,
    params
  );
  return response.data;
};

export const reset = async (params:ResetProps) => {
  const response = await axios.post(`${baseURL}auth/reset-password`, params);
  return response.data;
};
