import { ICategory } from '@/types/cardsSliderTypes';
import { ISizesOptionsData } from '@/types/formProductTypes';

export interface ImageAttrData {
  data: Array<{
    id: number;
    attributes: {
      url: string;
    };
  } | null>;
}

export interface GenderAttrData {
  data: {
    id: number;
    attributes: {
      name: string;
    };
  };
}

export interface SizeArrtData {
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
