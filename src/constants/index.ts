// FOLDER FOR CONSTANS (example - BASE URL, EXPORTS)
import signIn from '../assets/singInBg.png'
import signUp from '../assets/singUpBg.png'
import forgotReset from '../assets/forgotResetBg.png' 
import error404 from '../assets/error404.png'
import error500 from '../assets/error500.png'
import { StaticImageData } from 'next/image';

export enum Routes {
	registration = '/registration',
	authorization = '/authorization',
	forgot = '/forgot',
	reset = '/reset',
	error404 = '/404',
	error500 = '/500',

}

interface IComment{
	id: number,
	text: string,
	name: string,
	rating: number,
	location: string
}

export const comments: IComment[] = [
	{
		id:1,
		text:'Lorem Ipsum is a really great company because the team is passionate about the projects they produce, the people they work with, the quality of the work they do.',
		name:'John Stone',
		rating:5,
		location:'Ukraine, Chernivtsi'
	},
	{
		id:2,
		text:'Lorem Ipsum is a really great company because the team is passionate about the projects they produce, the people they work with, the quality of the work they do.',
		name:'Mike Vilson',
		rating:3,
		location:'Poland, Warzaw'
	},
	{
		id:3,
		text:'Lorem Ipsum is a really great company because the team is passionate about the projects they produce, the people they work with, the quality of the work they do.',
		name:'Yana Rubskaja',
		rating:4,
		location:'Lithuania, Vilnius'
	},
	{
		id:4,
		text:'Lorem Ipsum is a really great company because the team is passionate about the projects they produce, the people they work with, the quality of the work they do.',
		name:'Don Mariant',
		rating:5,
		location:'Venice, Italy'
	},
]

export const getImage = (route: string): StaticImageData => {
  switch (route) {
    case Routes.authorization:
      return signIn;
    case Routes.registration:
      return signUp;
    case (Routes.forgot):
      return forgotReset;
    case (Routes.reset):
      return forgotReset;
    case (Routes.error404):
      return error404;
    case (Routes.error500):
      return error500;
		default: return forgotReset
		}
};