import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Abhi Mestri', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'My Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, My name is',
  name: 'Abhishek Sanjay Mestri',
  subtitle: 'Full Stack Developer',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'abhi.jpeg',
  paragraphOne: 'I am Abhishek Sanjay Mestri, All the way from Ratnagiri, Maharashtra',
  paragraphTwo:
    'I have completed my Bachelor Degree in "COMPUTER ENGINEERING" from Rajendra Mane College Of Engineering & Technology with CGPA 7.23 this year 2021',
  paragraphThree:
    'I am Full Stack Web Developer with the skills JavaScript, MERN Stack, React, Django, Gatsby, NextJS, Angular and Some programming languages like Python, C ',
  resume: 'https://github.com/abmestri25/Resume', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'mern.png',
    title: 'eCommerce Website using MERN Stack',
    info: 'I have built this site using MERN Stack through a course by Legend "Brad Traversy", It has React as front end, Nodejs Express as backend, MongoDB as database and Redux for state management,',
    info2:
      'I have implemented all the fuctionalities every ecommerce application has like add to cart functionality and PayPal payment integration',
    url: 'https://agile-sands-35378.herokuapp.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'wms.png',
    title: 'Workshop Management System',
    info: 'I have built this system using Django Framework and Bootstrap as front end and PostgreSQL as backend',
    info2:
      'Management of workshops conducted in institues and organizations is done through this system',
    url: 'https://beprojectwms.herokuapp.com/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'abmestri25@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/abmestri25',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/the.ab_man/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/abhishek-mestri-101281129/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/abmestri25/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
