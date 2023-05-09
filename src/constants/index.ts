// FOLDER FOR CONSTANS (example - BASE URL, EXPORTS)

import leftBurgerSetting from '../assets/icons/leftBurgerSetting.svg';
import bonusAcc from '../assets/icons/bonusAcc.svg';
import bag from '../assets/icons/bag.svg';
import profile from '../assets/icons/profile.svg';
import logout from '../assets/icons/logout.svg';

export const REGULAR_NAV_LINKS = [
  {
    name: 'Home',
    to: '/',
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
    icon: bonusAcc,
    name: 'Products',
    to: '/',
  },
  {
    icon: bag,
    name: 'Bag',
    to: '/',
  },
  {
    icon: profile,
    name: 'My profile',
    to: '/',
  },
  {
    icon: logout,
    name: 'Log out',
    to: '/',
  },
];
