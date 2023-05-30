import { IUpdateProfileInput } from '@/types/updateProfileTypes';
import { MenuItemParams } from '@/types';

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

export const searchSliderOptionsOnDesktop = {
  slidesToShow: 4.7,
  slidesToScroll: 1,
  infinite: false,
  arrows: true,
  touchMove: true,
  responsive: [
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
