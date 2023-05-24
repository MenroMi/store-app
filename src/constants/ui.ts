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
      id: 'phone',
      placeholder: '(949) 354-2574',
      label: 'Phone number',
      type: 'tel',
    },
  ];