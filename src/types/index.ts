export interface MenuItemParams {
  id: number;
  label: string;
  method?: () => void;
}

export interface IComment {
  id: number;
  text: string;
  name: string;
  rating: number;
  location: string;
}
