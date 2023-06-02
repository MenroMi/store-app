import bonusAccountIcon from '@/assets/icons/bonusAcc.svg';
import settingsIcon from '@/assets/icons/settings.svg';
import forgotReset from '@/assets/forgotResetBg.png';
import profileIcon from '@/assets/icons/profile.svg';
import logoutIcon from '@/assets/icons/logout.svg';
import loginIcon from '@/assets/icons/login.svg';
import homeIcon from '@/assets/icons/home.svg';
import error404 from '@/assets/error404.png';
import error500 from '@/assets/error500.png';
import shoesIcon from '@/assets/icons/shoes.svg';
import { StaticImageData } from 'next/image';
import { INavItem } from '@/types/INavItem';
import signIn from '@/assets/singInBg.png';
import signUp from '@/assets/singUpBg.png';

export enum Routes {
  register = '/auth/register',
  login = '/auth/login',
  forgot = '/auth/forgot',
  reset = '/auth/reset-password',
  sign = '/auth/mobile-login',
  error404 = '/404',
  error500 = '/500',
  bag = '/profile/bag',
  checkout = '/profile/checkout',
  addProduct = '/profile/products/add',
  myProducts = '/profile/products',
  search = '/catalog/search?page=1',
  forParamsURL = '/catalog/search', // dont touch this route. Thanks
  settings = '/profile/settings',
  forWomen = '/catalog/search?gender=women',
  forMen = '/catalog/search?gender=men',
  products = '/catalog/products',
  edit = '/profile/products/edit'
}

export const NAV_LINKS = [
  {
    name: 'Home',
    to: Routes.myProducts,
  },
  {
    name: 'For women',
    to: Routes.forWomen,
  },
  {
    name: 'For men',
    to: Routes.forMen,
  },
];

export const NAV_BURGER_LINKS: INavItem[] = [
  {
    icon: homeIcon,
    role: 'user guest',
    name: 'Home',
    to: Routes.myProducts,
  },
  {
    icon: shoesIcon,
    role: 'user',
    name: 'Catalog',
    to: Routes.search,
  },
  {
    icon: bonusAccountIcon,
    role: 'user',
    name: 'Add Product',
    to: Routes.addProduct,
  },
  {
    icon: settingsIcon,
    role: 'user',
    name: 'Settings',
    to: Routes.settings,
  },
  {
    icon: loginIcon,
    role: 'guest',
    name: 'Sign in',
    to: Routes.sign,
  },
  {
    icon: logoutIcon,
    role: 'user',
    name: 'Log out',
    to: Routes.search,
  },
];

export const ASIDE_MENU_LINKS = [
  {
    id: 1,
    role: 'user',
    icon: profileIcon,
    name: 'My profile',
    to: Routes.myProducts,
  },
  {
    id: 3,
    role: 'guest',
    icon: loginIcon,
    name: 'Sign in',
    to: Routes.login,
  },
  {
    id: 4,
    role: 'user',
    icon: settingsIcon,
    name: 'Settings',
    to: Routes.settings,
  },
  {
    id: 5,
    role: 'user',
    icon: logoutIcon,
    name: 'Log out',
    to: Routes.search,
  },
];

export const getImage = (route: string): StaticImageData => {
  switch (route) {
    case Routes.login:
      return signIn;
    case Routes.register:
      return signUp;
    case Routes.forgot:
      return forgotReset;
    case Routes.reset:
      return forgotReset;
    case Routes.error404:
      return error404;
    case Routes.error500:
      return error500;
    default:
      return forgotReset;
  }
};
