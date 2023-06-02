// react
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

// services
import { getProductById } from '@/services/cardBagService';

// types
import { AttrFromData } from '@/types/cardListTypes';
import { NotificationContext } from './notification';
import  useSessionStorage  from '@/hooks/useSessionStorage';

// hooks

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export type CartItem = {
  id: number;
  quantity: number;
};

export type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  cartQuantity: number;
  data: AttrFromData[];
  isFetched: boolean;
  value: { id: number; quantity: number }[];
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [value, setValue] = useSessionStorage<CartItem[]>('shopping-cart', []);
  const [valueIDs, setValueIDs] = useState<number[]>([]);

  const { setIsOpen, setIsFailed, setMessage } = useContext(NotificationContext);

  useEffect(() => {
    let IDs: number[] = [];
    if (value.length > 0) {
      for (let i = 0; i < value.length; i++) {
        if (valueIDs.indexOf(value[i].id) > -1) {
          continue;
        }
        IDs.push(value[i].id);
      }
      setValueIDs((prev) => [...prev, ...IDs.filter((item) => item)]);
    }
    if (value.length === 0) {
      setValueIDs([]);
    }
  }, [value]);

  const { data, isFetched } = useQuery({
    queryKey: ['bagData', valueIDs],
    queryFn: () => getProductById(valueIDs),
    keepPreviousData: true,
  });

  const cartQuantity = value?.reduce((quantity, item) => item.quantity + quantity, 0);

  function getItemQuantity(id: number) {
    return value && (value.find((item) => item.id === id)?.quantity || 0);
  }

  function increaseCartQuantity(id: number) {
    setValue((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setValue((currItems) => {
      return currItems.map((item) => {
        if (item.id === id) {
          if (item.quantity <= 1) {
            return { ...item, quantity: 1 };
          } else {
            return { ...item, quantity: item.quantity - 1 };
          }
        } else {
          return item;
        }
      });
    });
  }

  function removeFromCart(id: number) {
    setValueIDs((prev) => prev.filter((prevID) => prevID !== id));

    if (value.length === 1) {
      setValue([]);
    } else {
      setValue((currItems) => {
        return currItems.filter((item) => item.id !== id);
      });
    }
    onSuccess: {
      setIsOpen(true);
      setIsFailed(false);
      setMessage('Avatar was deleted');
    }
  }

  function clearCart() {
    setValue([]);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        clearCart,
        isFetched,
        data,
        cartQuantity,
        value,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
