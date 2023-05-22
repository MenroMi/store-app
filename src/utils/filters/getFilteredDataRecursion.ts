import { ParsedQs } from 'qs';

// interface
interface FilteredDataTypes {
  [x: string]: {
    [y: string]: {
      data: object | null;
    };
  };
}

let res: FilteredDataTypes[];

const onFilterData = (
  data: FilteredDataTypes[],
  count: number = 0,
  parsingQuery: ParsedQs,
  products: object[]
): object[] => {
  let qKeys: string[] = Object.keys(parsingQuery);

  if (qKeys.length <= 0) {
    return products;
  }

  if (count === qKeys.length) {
    return res;
  }

  res = data.filter((item) => {
    return item?.attributes?.[Object.keys(parsingQuery)[count]]?.data;
  });

  count++;
  return onFilterData(res, count, parsingQuery, products);
};

export default onFilterData;
