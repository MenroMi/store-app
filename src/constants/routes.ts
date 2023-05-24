import leftBurgerSetting from '@/assets/icons/leftBurgerSetting.svg';
import bonusAccountIcon from '@/assets/icons/bonusAcc.svg';
import settingsIcon from '@/assets/icons/settings.svg';
import forgotReset from '@/assets/forgotResetBg.png';
import profileIcon from '@/assets/icons/profile.svg';
import logoutIcon from '@/assets/icons/logout.svg';
import loginIcon from '@/assets/icons/login.svg';
import error404 from '@/assets/error404.png';
import error500 from '@/assets/error500.png';
import { StaticImageData } from 'next/image';
import { INavItem } from '@/types/INavItem';
import signIn from '@/assets/singInBg.png';
import signUp from '@/assets/singUpBg.png';
import bag from '@/assets/icons/bag.svg';


export enum Routes {
  register = '/auth/register',
  login = '/auth/login',
  forgot = '/auth/forgot',
  reset = '/auth/reset-password',
  sign = '/auth/mobile-login',
  error404 = '/404',
  error500 = '/500',
  bag = '/profile/bag',
  home = '/profile/home',
  addProduct = '/profile/products/add',
  myProducts = '/profile/products',
  search = '/catalog/search',
  settings = '/profile/settings',
}

export const NAV_LINKS = [
  {
    name: 'Home',
    to: Routes.home,
  },
  {
    name: 'For women',
    to: Routes.search,
  },
  {
    name: 'For men',
    to: Routes.search,
  },
];

export const NAV_BURGER_LINKS: INavItem[] = [
  // for unauth users
  {
    icon: leftBurgerSetting,
    name: 'Home',
    to: Routes.home,
  },
  {
    icon: bag,
    name: 'Bag',
    to: Routes.bag,
  },
  {
    icon: logoutIcon,
    name: 'Log In',
    to: Routes.login,
  },
  // for auth users
  {
    icon: leftBurgerSetting,
    name: 'Home',
    to: Routes.home,
  },
  {
    icon: bag,
    name: 'Bag',
    to: Routes.bag,
  },
  {
    icon: bonusAccountIcon,
    name: 'Add Product',
    to: Routes.addProduct,
  },
  {
    icon: settingsIcon,
    name: 'Settings',
    to: Routes.settings,
  },
  {
    icon: logoutIcon,
    name: 'Log In',
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
    name: 'Log in',
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
