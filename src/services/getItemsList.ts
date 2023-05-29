import { CartItem } from "@/contexts/shoppingCardContext";
import axios from 'axios';
import { baseURL } from '@/constants';
import { AttrFromData } from '@/types/cardListTypes';

const instance = axios.create({
  withCredentials: true,
  baseURL,
});


export const getItemsList = async (items: CartItem[]) => {
  let itemsArray: number[];
  items.map(async (item) => {
    const response: number = await instance
      .get(`/products/${item.id}`)
      .then((res) => res?.data?.data?.attributes?.price);
    itemsArray = {};
    return itemsArray;
  })
};