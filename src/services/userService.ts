import { baseURL } from "@/constants";
import axios from "axios";

export const getUser = async (token:string | null) => {
  const response = await axios.get(`${baseURL}users/me`,{
    headers:{
      Authorization:`Bearer ${token}`
    }
  });
  console.log(response.data);
  return response.data;
};
