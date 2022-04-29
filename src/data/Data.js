// Projects
import KB from '../assets/Projects/keitabeauty.png';
import PH from '../assets/Projects/planthaven.png';
import EH from '../assets/Projects/empirehome.png';

//  Skills
import HTML from '../assets/icons/html.png';
import JS from '../assets/icons/javascript.png';
import CSS from '../assets/icons/css.png';
import REACT from '../assets/icons/react-original.svg';
import TYPESCRIPT from '../assets/icons/typescript-plain.svg';
import NODE from '../assets/icons/nodejs-plain.svg';
import EX from '../assets/icons/express-original-wordmark.svg';
import MONGO from '../assets/icons/mongo.png';
import AWS from '../assets/icons/aws.png';
import POSTGRES from '../assets/icons/postgresql-original.svg';
import REDUX from '../assets/icons/redux-original.svg';

export const ProjectData = [
	{
		title: "Keita's Beauty",
		image: KB,
		tools:[ HTML, CSS, JS, REACT, REDUX, POSTGRES, AWS],
		desc: "Keita's Beauty is an online E-commerce Website where you can purchase your favorite make-up products for a reasonable price. Redux state management is used to handle cart functionality.",
	},
	{
		title: 'Plant Haven',
		image: PH,
		tools: [HTML, CSS, JS, REACT,  NODE, EX,MONGO,],
		desc: 'House Plant Heaven is an app where you can find a variety of indoor plants. You can expand your knowledge about different varieties, choose plants based on your specific needs, find distributers, and save your plant crushes to a favorites list. This project was created using React, CSS, HTML, JavaScript, Node.js, Express, MongoDB, Mongoose, and deployed with Heroku and Netlify.',
	},
	{
		title: 'Empire Homes',
		image: EH,
		tools: [HTML, CSS, JS, REACT],
		desc: 'Empire Homes is a real estate listing website for homebuyers looking to purchase a new home. Users can make filtered searches in any city they are looking to relocate and save property listings that are actively for sale on the market. In the future, I would like to add a messaging platform so users will be able to send messages and request appointments in the app.',
	},
];
