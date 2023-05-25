import { baseURL } from "@/constants";
import axios from "axios";

export const getUser = async (token:string | null) => {
  const response = await axios.get(`${baseURL}users/me?populate=*`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
