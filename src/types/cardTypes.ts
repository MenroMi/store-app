import { StaticImageData } from 'next/image';

export interface ICardProps {
  productCategory: string;
  productImageSrc: StaticImageData | string;
  productName: string;
  productPrice: number;
  children: JSX.Element;
}
