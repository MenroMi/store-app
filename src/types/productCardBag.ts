import { StaticImageData } from 'next/image';
import { AttrFromData } from './cardListTypes';
import { ICategory } from './cardsSliderTypes';

// export interface ICardBagProps {
//   id: number;
//   productImageSrc: string | StaticImageData;
//   productName: string;
//   productPrice: number;
//   productCategory: string;
//   inStock: boolean;
//   quantity: number;
// }

// export type CardBagContextType = {
//   products: ICardBagProps[];
//   changeQuantity: (id: number, quantity: number) => void;
//   deleteProduct: (id: number) => void;
// };

export interface ICardBagProps {
  productName: string;
  productCategory: string;
  productImageSrc: StaticImageData | string;
  productPrice: number;
  id: number;
  quantity: number;
}

export interface ICardsBagProps {
  product: AttrFromData;
  quantity: number;
}