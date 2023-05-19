import { StaticImageData } from 'next/image';

export interface ICardBagProps {
  id: number;
  productImageSrc: string | StaticImageData;
  productName: string;
  productPrice: number;
  productCategory: string;
  inStock: boolean;
  quantity: number;
}

export type CardBagContextType = {
  products: ICardBagProps[];
  changeQuantity: (id: number, quantity: number) => void;
  deleteProduct: (id: number) => void;
};