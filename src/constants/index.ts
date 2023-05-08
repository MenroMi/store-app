// FOLDER FOR CONSTANS (example - BASE URL, EXPORTS)
export enum Routes {
	registration = '/registration',
	authorization = '/authorization',
	forgot = '/forgot',
	reset = '/reset'
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