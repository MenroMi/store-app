export interface IUser {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  phoneNumber: null | number;
  firstName: null | string;
  lastName: null | string;
  products: [];
  avatar: null | string;
}
