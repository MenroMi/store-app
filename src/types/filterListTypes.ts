export interface ActiveFiltersTypes {
  label: string;
  id: number;
  name: string;
  checked: boolean;
}

export interface FilterListRender {
  label: string;
  name: string;
  values: object[];
}

export interface AttrTypes {
  name?: string;
  price?: number;
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

// =====================

export interface IActiveFilters {
  (
    activeFilters: ActiveFiltersTypes[],
    allFilters: FilterListRender[] | any[] | undefined,
    allProducts: any
  ): any[];
}

export interface IOtherActiveFilters {
  (activeFilters: ActiveFiltersTypes[], allFilters: FilterListRender[] | any[] | undefined): any[];
}

export interface IActualProducts {
  (
    brands: {
      [x: string]: number[];
    }[],
    filters: {
      [x: string]: number[];
    },
    products: any
  ): any[];
}

export interface IFilters {
  id: number;
  attributes: {
    name?: string;
    products?: {
      data?: {
        id?: number;
        attributes: {
          teamName: string;
        };
      }[];
    };
  };
}
