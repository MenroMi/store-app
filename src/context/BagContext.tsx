import React, { createContext, useState } from 'react';
import { CardBagContextType, ICardBagProps } from '@/types/productCardBag';
import productImage from '@/assets/singInBg.png';
import { useSessionStorage } from '@/hooks/useSessionStorage/useSessionStorage';

type BagContextProviderProps = {
  children: React.ReactNode;
};

export const BagContext = createContext({} as CardBagContextType);

export const BagContextProvider: React.FC<BagContextProviderProps> = ({ children }) => {
  
  const [products, setProducts] = useSessionStorage<ICardBagProps[]>('shopping card', []);

  function getItemQuantity(id: number) {
    return products.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setProducts((products) => {
      if (products.find((item) => item.id === id) == null) {
        return [...products, { id, quantity: 1 }];
      } else {
        return products.map((item) => {
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
    setProducts((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setProducts((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <BagContext.Provider
      value={{
        products,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      }}
    >
      {children}
    </BagContext.Provider>
  );
};
