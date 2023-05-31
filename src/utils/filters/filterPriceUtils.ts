import { regExpOnlyNumbs } from '@/constants';
import { InputsData } from '@/types/filterListTypes';
import { Dispatch, SetStateAction } from 'react';

export const maxNumber = (dataArray: InputsData[], setMax: Dispatch<SetStateAction<number>>) => {
  let arrayWithPrice: number[];
  let maxN: number;

  if (dataArray.length <= 0 || typeof dataArray === 'undefined') {
    maxN = 0;
    return maxN;
  } else {
    arrayWithPrice = dataArray?.map((product: InputsData) => product?.attributes?.price!);
    maxN = Math.max(...arrayWithPrice);
  }

  setMax((prev) => (prev > maxN ? prev : maxN));
};

export const handleChanges = (
  value: string | number,
  setActualAmount: Dispatch<SetStateAction<number>>
) => {
  if (regExpOnlyNumbs.test(String(value))) {
    return;
  } else {
    setActualAmount(() => +value);
  }
};
