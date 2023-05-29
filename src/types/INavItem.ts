import { Routes } from '@/constants/routes';

export interface INavItem {
  icon?: any;
  name: string;
  to: Routes;
  role?:string
}
