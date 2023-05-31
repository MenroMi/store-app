import { StaticImageData } from 'next/image';
import { AttrFromData } from './cardListTypes';

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