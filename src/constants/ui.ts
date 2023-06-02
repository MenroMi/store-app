import { MenuItemParams } from '@/types';
import { IUpdateProfileInput } from '@/types/updateProfileTypes';

export const homeItems: MenuItemParams[] = [
  { id: 1, label: 'View', method: () => {} },
  { id: 2, label: 'Edit', method: () => {} },
  { id: 3, label: 'Delete', method: () => {} },
];
export const othersItems: MenuItemParams[] = [
  { id: 1, label: 'View', method: () => {} },
  {
    id: 2,
    label: 'Add to Cart',
  },
];

export const UPDATE_PROFILE_INPUTS: IUpdateProfileInput[] = [
  {
    id: 'firstName',
    placeholder: 'Jane',
    label: 'Name',
    type: 'text',
  },
  {
    id: 'lastName',
    placeholder: 'Meldrum',
    label: 'Surname',
    type: 'text',
  },
  {
    id: 'phoneNumber',
    placeholder: '(949) 354-2574',
    label: 'Phone number',
    type: 'tel',
  },
];
export const AUTH_INPUTS: IUpdateProfileInput[] = [
  {
    id: 'name',
    placeholder: 'Hayman Andrews',
    label: 'Name',
    type: 'text',
  },
  {
    id: 'email',
    placeholder: 'example@mail.com',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'password',
    placeholder: 'at least 8 characters',
    label: 'Password',
    type: 'password',
  },
  {
    id: 'confirm',
    placeholder: 'at least 8 characters',
    label: 'Confirm password',
    type: 'password',
  },
];

export const myProfileSliderOptions = {
  slidesToShow: 4,
  slidesToScroll: 2,
  infinite: true,
  arrows: true,
  touchMove: false,
  responsive: [
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        touchMove: true,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
        touchMove: true,
      },
    },
  ],
};

export const myProfileSliderMobileOptions = {
  arrow: true,
  slidesToShow: 3.05,
  slidesToScroll: 3,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
};

export const searchSliderOptionsOnDesktop = {
  slidesToShow: 4.7,
  slidesToScroll: 2,
  infinite: false,
  arrows: true,
  touchMove: false,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        touchMove: true,
      },
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3.5,
        slidesToScroll: 1,
        touchMove: true,
      },
    },

    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        touchMove: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        touchMove: true,
      },
    },
  ],
};

export const searchSliderOptionsOnMobile = {
  arrow: true,
  slidesToShow: 3.05,
  slidesToScroll: 3,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
};
