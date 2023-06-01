import { AttrFromData } from './cardListTypes';

export interface ActiveFiltersTypes {
  [label: string]: string[];
}

export interface FilterListRender {
  label: string;
  name: string;
  values: InputsData[];
}

export interface InputsData {
  id: number;
  attributes: AttrTypes;
}

export interface AttrTypes {
  name?: string;
  price?: number;
  products?: { data: AttrFromData[] };
  createdAt?: string;
  updateAt?: string;
  publishedAt?: string;
}
