import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';

export function useSessionStorage<T>(key: string) {
  const [value, setValue] = useState<object[]>([]);

  useEffect(() => {
    if (sessionStorage.length > 0) {
      let initValue = sessionStorage.getItem('shopping-cart');
      console.log(sessionStorage);
      console.log(value);

      if (initValue) {
        setValue(JSON.parse(initValue));
      } else {
        setValue([]);
      }
    }
  }, []);

  useEffect(() => {
    if (window) {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return { value, setValue } as {
    value: { id: number; quantity: number }[];
    setValue: Dispatch<SetStateAction<T>>;
  };
}
