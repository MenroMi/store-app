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
  filters: FilterListRender[] | any[] | undefined;
}

export interface InputsData {
  id: number;
  attributes: AttrTypes;
}

export interface IFiltersAndCardsProps {
  hide: boolean;
  isFetched: boolean;
  isLoading: boolean;
  isError: boolean;
  error: Error | unknown;
  filters: FilterListRender[] | any[] | undefined;
}

export interface IMobileFilterMenuProps {
  hide: boolean;
  onHide: (event: React.MouseEvent<HTMLImageElement>) => void;
  isFetched: boolean;
  isLoading: boolean;
  isError: boolean;
  error: Error | unknown;
  filters: FilterListRender[] | any[] | undefined;
}
