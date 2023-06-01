import { IProduct } from '@/types/cardsSliderTypes';
import { IProductAfterMapping } from '@/types/slideTypes';
import { StaticImageData } from 'next/image';
import signIn from '@/assets/singInBg.png';

const mappingDataForSlides = (products: IProduct[]) => {
  let category: string;
  let name: string;
  let img: StaticImageData | string;
  let price: number;
  let id: number;
  let slider: number;

  let res: IProductAfterMapping[] = products.map((product) => {
    if (typeof product?.attributes !== 'undefined') {
      category = product?.attributes?.categories!.data?.[0]
        ? product?.attributes.categories!.data[0].attributes?.name
        : 'Classic';
      name = product?.attributes?.name!;
      img = product?.attributes?.images?.data?.[0]
        ? product?.attributes?.images?.data[0]?.attributes?.url
        : signIn;
      price = product?.attributes?.price!;
      id = product?.id;
      slider = 1;
    } else {
      category = product?.categories[0].name ? product?.categories[0].name : 'Classic';
      name = product?.name;
      img = product?.images[0]?.url ? product?.images[0]?.url : signIn;
      price = product.price;
      id = product?.id;
      slider = 2;
    }

    return { category, name, img, price, slider, id };
  });

  return res;
};

export default mappingDataForSlides;
