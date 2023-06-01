import { StaticImageData } from 'next/image';
export interface ICustomSlideWrapperProps {
  marginRight?: string | number;
}

export interface IImageAttribute {
  fill?: boolean;
  priority?: boolean;
  width?: number;
  height?: number;
  sx?: {
    objectPosition: string;
  };
}

export interface IProductAfterMapping {
  category: string;
  name: string;
  img: StaticImageData | string;
  price: number;
  id: number;
  slider: number;
}

export interface ISlideProps {
  productCategory: string;
  productImageSrc: StaticImageData | string;
  productName: string;
  productPrice: number;
  marginRight?: string | number;
  children?: JSX.Element;
  id?: number;
}
