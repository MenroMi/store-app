import React, { createContext, useState } from 'react';
import { CardBagContextType, ICardBagProps } from '@/types/productCardBag';
import productImage from '@/assets/singInBg.png';

type BagContextProviderProps = {
  children: React.ReactNode;
};

export const BagContext = createContext<CardBagContextType | null>(null);

export const BagContextProvider: React.FC<BagContextProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<ICardBagProps[]>([
    {
      id: 1,
      productImageSrc: productImage,
      productName: 'Nike Air Max 270',
      productPrice: 160,
      productCategory: "Women's shoes",
      inStock: true,
      quantity: 1,
    },
    {
      id: 2,
      productImageSrc: productImage,
      productName: 'Nike Air Max 270',
      productPrice: 160,
      productCategory: "Women's shoes",
      inStock: true,
      quantity: 1,
    },
    {
      id: 3,
      productImageSrc: productImage,
      productName: 'Nike Air Max 270',
      productPrice: 160,
      productCategory: "Women's shoes",
      inStock: true,
      quantity: 1,
    },
    {
      id: 4,
      productImageSrc: productImage,
      productName: 'Nike Air Max 270',
      productPrice: 160,
      productCategory: "Women's shoes",
      inStock: true,
      quantity: 1,
    },
  ]);

  const deleteProduct = (id: number) => {
    const newArray: ICardBagProps[] = products.filter((product) => product.id !== id);
    setProducts(newArray);
  };

  const changeQuantity = (id: number, quantity: number) => {
    const newProductsList: ICardBagProps[] = products.map((product) =>
      product.id === id ? { ...product, quantity } : product
    );
    setProducts(newProductsList);
  };

  return (
    <BagContext.Provider value={{ products, deleteProduct, changeQuantity }}>
      {children}
    </BagContext.Provider>
  );
};
