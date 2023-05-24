import { baseURL } from "@/constants/urls";
import axios from "axios";

export const getUser = async (token:string | null) => {
  const response = await axios.get(`${baseURL}users/me?populate=*`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response.data);
  return response.data;
};
