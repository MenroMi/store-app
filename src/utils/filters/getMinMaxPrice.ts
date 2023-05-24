import { InputsData } from '@/types/filterListTypes';

const getMinMaxPrice = (data: InputsData[]) => {
  if (typeof data === 'undefined') {
    return [];
  }
  return data?.map((product: InputsData) => product?.attributes?.price);
};

export default getMinMaxPrice;
