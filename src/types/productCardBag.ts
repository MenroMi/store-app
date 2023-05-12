import { StaticImageData } from 'next/image';

export interface ICardBagProps {
  productImageSrc: string | StaticImageData;
  productName: string;
  productPrice: number;
  productCategory: string;
  inStock: boolean;
}
