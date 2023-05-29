export interface ICardsSliderProps {
  products: IProduct[];
  deleteProduct: () => void;
  isLoading: boolean;
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  categories: ICategory[];
  images: IImage[];
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
