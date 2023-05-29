import { ISizesOptionsData } from "@/types/addProductTypes";
import { AttrFromData, ImageAttrData } from '@/types/cardListTypes';

export interface IDescriptionProps {
    product: AttrFromData,
    sizes?: ISizesOptionsData[],
}
export interface ISingleProductPage {
    product: AttrFromData;
    sizes: ISizesOptionsData[];
}
export interface IGetStaticProps {
    params: {
        id: number;
    }
}

export interface IImageGalleryProps {
    images: ImageAttrData;
}