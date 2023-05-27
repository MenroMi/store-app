import { StaticImageData } from 'next/image';
export interface ICustomSlideWrapperProps {
  marginRight?: string | number;
}

export interface ISlideProps {
  productCategory: string;
  productImageSrc: StaticImageData | string;
  productName: string;
  productPrice: number;
  marginRight?: string | number;
  children?: JSX.Element;
}
