import axios from "axios";

// const api = axios.create({
//   baseURL: 'https://shoes-shop-strapi.herokuapp.com/api',
// });

interface LoginProps {
  identifier: string;
  password: string;
}

export const login = async (params: LoginProps) => {
  const response = await axios.post(
    'https://shoes-shop-strapi.herokuapp.com/api/auth/local',
    params
  );
  console.log(response.data);
  
  return response.data;
};
