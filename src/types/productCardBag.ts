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
