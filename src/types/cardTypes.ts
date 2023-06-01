import { StaticImageData } from 'next/image';
export interface ICustomCardWrapperProps {
  marginRight?: string | number;
}

export interface ICardProps {
  productCategory: string;
  productImageSrc: StaticImageData | string;
  productName: string;
  productPrice: number;
  productId?: number;
  marginRight?: string | number;
  children?: JSX.Element;
}
