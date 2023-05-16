// FOLDER FOR CONSTANS (example - BASE URL, EXPORTS)

import leftBurgerSetting from '@/assets/icons/leftBurgerSetting.svg';
import bag from '@/assets/icons/bag.svg';
import signIn from '@/assets/singInBg.png';
import signUp from '@/assets/singUpBg.png';
import forgotReset from '@/assets/forgotResetBg.png';
import error404 from '@/assets/error404.png';
import error500 from '@/assets/error500.png';
import { StaticImageData } from 'next/image';
import { IUpdateProfileInput } from '@/types/updateProfileTypes';
import bagIcon from '@/assets/icons/bagSideMenu.svg';
import profileIcon from '@/assets/icons/profile.svg';
import wishListIcon from '@/assets/icons/wishListPreferences.svg';
import bonusAccountIcon from '@/assets/icons/bonusAcc.svg';
import logoutIcon from '@/assets/icons/logout.svg';
import settingsIcon from '@/assets/icons/settings.svg';
import { MenuItemParams } from '@/types';
export const REGULAR_NAV_LINKS = [
  {
    name: 'Home',
    to: '/profile/home',
  },
  {
    name: 'For women',
    to: '/##',
  },
  {
    name: 'For men',
    to: '/##',
  },
  {
    name: 'Accessories',
    to: '/##',
  },
  {
    name: 'Sale',
    to: '/##',
  },
];

export const REGULAR_NAV_BURGER_LINKS = [
  {
    icon: leftBurgerSetting,
    name: 'Home',
    to: '/',
  },
  {
    icon: bonusAccountIcon,
    name: 'Products',
    to: '/',
  },
  {
    icon: bag,
    name: 'Bag',
    to: '/',
  },
  {
    icon: profileIcon,
    name: 'My profile',
    to: '/',
  },
  {
    icon: logoutIcon,
    name: 'Log out',
    to: '/',
  },
];

export const ASIDE_MENU_LINKS = [
  {
    id: 1,
    icon: profileIcon,
    name: 'My profile',
    to: '/profile/products/',
  },
  {
    id: 2,
    icon: bagIcon,
    name: 'My orders',
    to: '#',
    // to: '/history/orders/',
  },
  {
    id: 3,
    icon: wishListIcon,
    name: 'Wish list',
    to: '/#',
  },
  {
    id: 4,
    icon: settingsIcon,
    name: 'Settings',
    to: '/profile/settings/',
  },
  {
    id: 5,
    icon: logoutIcon,
    name: 'Log out',
    to: '/auth/login',
  },
];

export enum Routes {
  register = '/auth/register',
  login = '/auth/login',
  forgot = '/auth/forgot',
  reset = '/auth/reset',
  sign = '/auth/mobile-login',
  error404 = '/404',
  error500 = '/500',
  bag = '/profile/bag/',
  home = '/profile/home',
  addProduct = '/profile/products/add',
}

interface IComment {
  id: number;
  text: string;
  name: string;
  rating: number;
  location: string;
}

export const comments: IComment[] = [
  {
    id: 1,
    text: 'Lorem Ipsum is a really great company because the team is passionate about the projects they produce, the people they work with, the quality of the work they do.',
    name: 'John Stone',
    rating: 5,
    location: 'Ukraine, Chernivtsi',
  },
  {
    id: 2,
    text: 'Lorem Ipsum is a really great company because the team is passionate about the projects they produce, the people they work with, the quality of the work they do.',
    name: 'Mike Vilson',
    rating: 3,
    location: 'Poland, Warzaw',
  },
  {
    id: 3,
    text: 'Lorem Ipsum is a really great company because the team is passionate about the projects they produce, the people they work with, the quality of the work they do.',
    name: 'Yana Rubskaja',
    rating: 4,
    location: 'Lithuania, Vilnius',
  },
  {
    id: 4,
    text: 'Lorem Ipsum is a really great company because the team is passionate about the projects they produce, the people they work with, the quality of the work they do.',
    name: 'Don Mariant',
    rating: 5,
    location: 'Venice, Italy',
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

export const UPDATE_PROFILE_INPUTS: IUpdateProfileInput[] = [
  {
    id: 'name',
    placeholder: 'Jane',
    label: 'Name',
    type: 'text',
  },

  {
    id: 'surname',
    placeholder: 'Meldrum',
    label: 'Surname',
    type: 'text',
  },

  {
    id: 'email',
    placeholder: 'email@example.com',
    label: 'Email',
    type: 'email',
  },

  {
    id: 'phonenumber',
    placeholder: '(949) 354-2574',
    label: 'Phone number',
    type: 'tel',
  },
];

export const SHOE_SIZES: string[] = ['EU-36', 'EU-37', 'EU-38', 'EU-39', 'EU-40'];

export const BRANDS: string[] = ['Nike', 'Adidas', 'Puma', 'Reebok'];

export const GENDERS: string[] = ['Male', 'Feemale'];

export const homeItems: MenuItemParams[] = [{ id: 1, label: 'Delete', method: () => {} }];
export const othersItems: MenuItemParams[] = [
  { id: 1, label: 'View', method: () => {} },
  { id: 2, label: 'Add to Wish List', method: () => {} },
  { id: 3, label: 'Add to Cart', method: () => {} },
];
