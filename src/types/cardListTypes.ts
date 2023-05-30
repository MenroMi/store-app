import { ICategory } from '@/types/cardsSliderTypes';
import { ISizesOptionsData } from '@/types/addProductTypes';

export interface ICardListProps {
  products?: any[];
}

export interface ImageAttrData {
  data: Array<{
    id: number;
    attributes: {
      url: string;
    };
  } | null>;
}

interface GenderAttrData {
  data: {
    id: number;
    attributes: {
      name: string;
    }
  };
}

interface SizeArrtData {
  data: ISizesOptionsData;
}

export interface AttrFromData {
  id: number;
  attributes: {
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
