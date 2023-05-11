export interface FilterListRender {
  name: string;
  label: string;
  id: number;
  searchbar?: boolean;
  inputs?: string[];
  categories?: { name: string; label: string; amount: number; id: number }[];
  price?: object;
  color?: object;
}

export interface CategoriesList {
  name: string;
  label: string;
  amount: number;
  id: number;
}
