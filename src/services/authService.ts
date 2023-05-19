import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://shoes-shop-strapi.herokuapp.com/api',
// });

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
    'https://shoes-shop-strapi.herokuapp.com/api/auth/local',
    params
  );
  console.log(response.data)
  return response.data;
};

export const registration = async (params: RegistrationProps) => {
  const response = await axios.post(
    'https://shoes-shop-strapi.herokuapp.com/api/auth/local/register',
    params
  );
  console.log(response.data);
  return response.data;
};

export const forgot = async (params:ForgotProps) => {
  const response = await axios.post(
    'https://shoes-shop-strapi.herokuapp.com/api/auth/forgot-password',
    params
  );
  console.log(response.data);
  return response.data;
};

export const reset = async (params:ResetProps) => {
  const response = await axios.post(
    'https://shoes-shop-strapi.herokuapp.com/api/auth/reset-password',
    params
  );
  console.log(response.data);
  return response.data;
};
