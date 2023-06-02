import { GenderAttrData, ImageAttrData, SizeArrtData } from './cardListTypes';

export interface ICardsSliderProps {
  products: IProduct[];
  deleteProduct?: () => void;
  isRedirecting?: boolean;
  setIsRedirecting?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IProduct {
  product: any;
  id: number;
  name: string;
  description: string;
  price: number;
  categories: ICategory[];
  images: IImage[];
  attributes?: {
    name: string;
    price: number;
    images: ImageAttrData;
    gender: GenderAttrData;
    size: SizeArrtData;
    teamName: string;
    description: string;
    categories?: {
      data: {
        id: number;
        attributes: ICategory;
      }[];
    };
  };
}

export interface ICategory {
  id: number;
  name: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface IImage {
  url: string;
}
