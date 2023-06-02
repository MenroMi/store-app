import { IAvatar } from "./userTypes";

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

export interface ISettings {
  firstName: string;
  lastName: string;
  phoneNumber: number | string;
  avatar?: IAvatar | null;
}

export interface IRegistration {
  name?: string;
  email?: string;
  password?: string;
  confirm?: string;
}
