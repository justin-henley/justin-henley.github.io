// Importing here allows for passing icons into other files on import
import { faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

export const vars = {
  primary: '#3cdbc0',
  textDark: '#0f564a',
  textMedium: '#333',
  textLight: 'gray',
  headline: '#3cdbc0',
  buttonText: 'white',
  buttonBackground: '#0f564a',
  navLink: '',
  live: '',
  code: '',
  h2: '',
};

export const skills = [
  'MongoDB',
  'Express.js',
  'React.js',
  'Node.js',
  'JavaScript',
  'MySQL',
  'SQL',
  'Java',
  'C++',
  'PHP',
  'HTML',
  'CSS',
  'Git',
  'Github',
  'Linux',
  'MacOS',
  'Windows',
  /* "OOP", */
];

export const about = {
  header: 'Justin Henley',
  headline: "Hello, I'm Justin Henley.",
  sub: 'Software Engineer',
  /* blurb: 'Lorem ipsum...', */
};

export const resume = {
  link: 'https://drive.google.com/file/d/1xHfjOQzdwGnigclHfSF42dWMvaLECc7N/view?usp=sharing',
  linkText: 'Resume',
  faIcon: faFileLines,
};

export const social = {
  github: {
    link: 'https://github.com/justin-henley',
    linkText: 'Github',
    faIcon: faGithub,
  },
  linkedin: {
    link: 'https://www.linkedin.com/in/justin-henley/',
    linkText: 'Linkedin',
    faIcon: faLinkedin,
  },
  twitter: {
    link: 'https://twitter.com/jah_dev',
    linkText: 'Twitter',
    faIcon: faTwitterSquare,
  },
  email: {
    link: 'mailto:justin.a.henley@gmail.com',
    linkText: 'E-mail',
    faIcon: faEnvelope,
  },
};

export const copyright = {
  name: 'React Portfolio by Justin Henley',
  source: 'https://github.com/justin-henley/justin-henley.github.io',
};

export const nav = {
  about: {
    jump: '#about',
    text: 'About',
  },
  portfolio: {
    jump: '#portfolio',
    text: 'Portfolio',
  },
  skills: {
    jump: '#skills',
    text: 'Skills',
  },
  contact: {
    jump: '#contact',
    text: 'Contact',
  },
};

export const projects = [
  {
    title: 'Eatt - Front End',
    description:
      'A bilingual Mandarin-English dish and menu translation app, enabling travelers to eat more adventurously.',
    live: 'https://eatt-frontend.onrender.com',
    code: 'https://github.com/justin-henley/eatt-frontend',
    img: '',
    tech: ['React', 'Next.js', 'Bootstrap' /* 'CSS' */],
  },
  {
    title: 'Eatt - Back End',
    description:
      'A RESTful API connected to the Eatt MongoDB database. Allows for CRUD operations on individual dishes and menus.',
    live: null,
    code: 'https://github.com/justin-henley/eatt-backend',
    img: '',
    tech: ['Node', 'Express', 'Mongoose' /* 'REST' */],
  },
  {
    title: 'Unit Converter',
    description: 'Unit conversions between Taiwanese (ROC), metric, and US customary units of measure.',
    live: 'https://justin-henley.github.io/Taiwanese-Units-Converter---React/',
    code: 'https://github.com/justin-henley/Taiwanese-Units-Converter---React',
    img: '',
    tech: ['React', 'styled-components'],
  },
  {
    title: 'Cycle Taiwan',
    description: 'A responsive, mobile-first website dedicated to cycling in the island nation of Taiwan.',
    live: 'https://justin-henley.github.io/Cycle-Taiwan/',
    code: 'https://github.com/justin-henley/Cycle-Taiwan',
    img: '',
    tech: ['HTML5', 'CSS3'],
  },
  /* {
    title: 'Color Picker',
    description:
      'Allows a user to select a color with a click or touch, and see the color and its RGB and hex values.',
    live: 'https://justin-henley.github.io/WebGL-Color-Picker/',
    code: 'https://github.com/justin-henley/WebGL-Color-Picker',
    img: '',
    tech: ['JavaScript', 'WebGL'],
  }, */
  {
    title: 'Acme Blogs',
    description: 'Fetches JSON data from a REST API and renders posts by user, with comments below each post.',
    live: 'https://justin-henley.github.io/js_acme_blogs/',
    code: 'https://github.com/justin-henley/js_acme_blogs',
    img: '',
    tech: ['JavaScript'],
  },
  {
    title: 'Portfolio Page',
    description: 'This page, built with React and styled with CSS and Styled Components.',
    live: 'https://justin-henley.github.io/',
    code: 'https://github.com/justin-henley/justin-henley.github.io',
    img: '',
    tech: ['React', 'styled-components'],
  },
];
