import { StaticImageData } from 'next/image';

export interface ICardBagProps {
  id: number;
  quantity: number;
}

export type CardBagContextType = {
  products: ICardBagProps[];
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};