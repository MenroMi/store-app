// FOLDER FOR CONSTANS (example - BASE URL, EXPORTS)

import leftBurgerSetting from '../assets/icons/leftBurgerSetting.svg';
import bonusAcc from '../assets/icons/bonusAcc.svg';
import bag from '../assets/icons/bag.svg';
import profile from '../assets/icons/profile.svg';
import logout from '../assets/icons/logout.svg';
import signIn from '../assets/singInBg.png';
import signUp from '../assets/singUpBg.png';
import forgotReset from '../assets/forgotResetBg.png';
import error404 from '../assets/error404.png';
import error500 from '../assets/error500.png';
import { StaticImageData } from 'next/image';
import { IUpdateProfileInput } from '@/types/updateProfileTypes';

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
]

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
]

export enum Routes {
	registration = '/registration',
	authorization = '/authorization',
	forgot = '/forgot',
	reset = '/reset',
	sign = '/sign',
	error404 = '/404',
	error500 = '/500',
}

interface IComment {
	id: number
	text: string
	name: string
	rating: number
	location: string
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
]

export const getImage = (route: string): StaticImageData => {
  switch (route) {
    case Routes.authorization:
      return signIn;
    case Routes.registration:
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
