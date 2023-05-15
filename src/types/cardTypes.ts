import { StaticImageData } from 'next/image';
export interface ICustomCardWrapperProps {
  marginRight?: string | number;
}

export interface ICardProps {
  productCategory: string;
  productImageSrc: StaticImageData;
  productName: string;
  productPrice: number;
  marginRight?: string | number;
}
