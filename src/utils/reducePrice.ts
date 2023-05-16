import { ICardBagProps } from "@/types/productCardBag";

export const reducePrice = (array: ICardBagProps[]) =>
  array.reduce((acc: number, elem: ICardBagProps) => acc + elem.productPrice * elem.quantity, 0);