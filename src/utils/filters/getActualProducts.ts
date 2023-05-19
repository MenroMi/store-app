import { IActualProducts } from '@/types/filterListTypes';

const getActualProducts: IActualProducts = (brands, filters, products) => {
  let res: any[] = [];

  if (brands.length <= 0 && Object.entries(filters).length > 0) {
    for (let key in filters) {
      filters[key].map((id: number) => {
        res = [...res, ...products.filter((product: { id: number }) => product?.id === id)];
      });
    }
  } else if (brands.length > 0 && Object.entries(filters).length <= 0) {
    brands.map((brand: { [x: string]: number[] }) => {
      for (let key in brand) {
        let actualProducts = brand[key].map((brandId: number) => {
          return products.filter((product: { id: number }) => product?.id === brandId);
        });

        res = [...res, ...actualProducts.flat(1)];
      }
    });
  } else {
    for (let key in filters) {
      filters[key].map((id: number) => {
        brands.map((brand: { [x: string]: number[] }) => {
          for (let key in brand) {
            let actualID = +brand[key].filter((brandId) => brandId === id).toString();

            res = [
              ...res,
              ...products.filter((product: { id: number }) => product?.id === actualID),
            ];
          }
        });
      });
    }
  }

  return res;
};

export default getActualProducts;
