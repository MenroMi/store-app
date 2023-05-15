export interface FilterListRender {
  label: string;
  name: string;
  values: object[];
}

export interface AttrTypes {
  name?: string;
  createdAt?: string;
  updateAt?: string;
  publishedAt?: string;
}

export interface IFiltersListProps {
  filters: FilterListRender[];
}

export interface InputsData {
  id: number;
  attributes: AttrTypes;
}
