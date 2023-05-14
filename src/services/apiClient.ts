import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://shoes-shop-strapi.herokuapp.com/api/',
});

export default instance;
