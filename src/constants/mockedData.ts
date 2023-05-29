import productImage from '@/assets/singInBg.png';
import { IComment } from '@/types';

export const ONE_MOCKED_PRODUCT = {
    id: 3,
    productImageSrc: productImage,
    productName: 'Nike Air Max 270',
    productPrice: 160,
    productCategory: "Women's shoes",
};

export const SHOE_SIZES: string[] = ['EU-36', 'EU-37', 'EU-38', 'EU-39', 'EU-40'];

export const BRANDS: string[] = ['Nike', 'Adidas', 'Puma', 'Reebok'];

export const GENDERS: string[] = ['Male', 'Feemale'];

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

export const mockData500 = {
  title: 'Oh snap!',
  description: 'We’re not quite sure what went wrong. You can go back home...',
};