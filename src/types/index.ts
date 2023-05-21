export interface MenuItemParams {
  id: number;
  label: string;
  method?: ((id: number, label: string, x?: () => void) => void) | undefined;
}

export interface IComment {
  id: number;
  text: string;
  name: string;
  rating: number;
  location: string;
}
