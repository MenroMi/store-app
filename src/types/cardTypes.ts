import { StaticImageData } from 'next/image';
export interface ICustomCardWrapperProps {
  marginRight?: string | number;
}

export interface ICardProps {
  id?: number;
  productCategory: string;
  productImageSrc: StaticImageData | string;
  productName: string;
  productPrice: number;
  marginRight?: string | number;
  children: JSX.Element;
}
