import { IProductData, ISizesOptionsData } from "./addProductTypes";
import { AttrFromData } from '@/types/cardListTypes';

export interface IDescriptionProps {
    product: IProductData | any,
    sizes?: ISizesOptionsData[],
}