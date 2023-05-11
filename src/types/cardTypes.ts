import { StaticImageData } from 'next/image';

export interface ICardProps {
  productCategory: string;
  productImageSrc: StaticImageData;
  productName: string;
  productPrice: number;
}
