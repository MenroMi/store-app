// FOLDER FOR CONSTANS (example - BASE URL, EXPORTS)

import { IUpdateProfileInput } from '@/types/updateProfileTypes';

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
