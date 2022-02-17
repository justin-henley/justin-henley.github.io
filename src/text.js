// Importing here allows for passing icons into other files on import
import { faEnvelope, faFileLines } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

export const vars = {
  primary: "#3cdbc0",
};

export const skills = [
  "C++",
  "Java",
  "JavaScript",
  "MongoDB",
  "Express",
  "React",
  "Node.js",
  "PHP",
  "MySQL",
  "HTML5",
  "CSS3",
  "SASS",
];

export const about = {
  header: "Justin Henley",
  headline: "Hello, I'm Justin Henley.",
  sub: "Software Engineer",
  blurb: "asdkj akdjh asdkjhdkf giut viuhvf weqpod appof fhsd f sdfohdf fdsio",
};

export const resume = {
  link: "",
  linkText: "Resume",
  faIcon: faFileLines,
};

export const social = {
  github: {
    link: "https://github.com/justin-henley",
    linkText: "Github",
    faIcon: faGithub,
  },
  linkedin: {
    link: "https://www.linkedin.com/in/justin-henley/",
    linkText: "Linkedin",
    faIcon: faLinkedin,
  },
  twitter: {
    link: "https://twitter.com/jah_dev",
    linkText: "Twitter",
    faIcon: faTwitterSquare,
  },
  email: {
    link: "mailto:justin.a.henley@gmail.com",
    linkText: "E-mail",
    faIcon: faEnvelope,
  },
};

export const nav = {
  about: {
    jump: "#about",
    text: "About",
  },
  portfolio: {
    jump: "#portfolio",
    text: "Portfolio",
  },
  skills: {
    jump: "#skills",
    text: "Skills",
  },
  contact: {
    jump: "#contact",
    text: "Contact",
  },
};

export const projects = [
  {
    title: "Unit Converter",
    description:
      "Unit conversions between Taiwanese (ROC), metric, and US customary units of measure.",
    live: "https://justin-henley.github.io/Taiwanese-Units-Converter---React/",
    code: "https://github.com/justin-henley/Taiwanese-Units-Converter---React",
    img: "",
  },
  {
    title: "Cycle Taiwan",
    description:
      "A responsive, mobile-first website dedicated to cycling in the island nation of Taiwan.",
    live: "https://justin-henley.github.io/Cycle-Taiwan/",
    code: "https://github.com/justin-henley/Cycle-Taiwan",
    img: "",
  },
  {
    title: "Color Picker",
    description:
      "Written in WebGL to allow a user to select a color with a click or touch, and see the color and its RGB and hex values.",
    live: "https://justin-henley.github.io/WebGL-Color-Picker/",
    code: "https://github.com/justin-henley/WebGL-Color-Picker",
    img: "",
  },
  {
    title: "Acme Blogs",
    description:
      "A demonstration blog written in vanilla JavaScript.  Pulls in JSON data and renders posts by user, with comments below each post.",
    live: "https://justin-henley.github.io/js_acme_blogs/",
    code: "https://github.com/justin-henley/js_acme_blogs",
    img: "",
  },
  {
    title: "Portfolio Page",
    description:
      "This page, written in React and styled with CSS and Styled Components.",
    live: "https://justin-henley.github.io/",
    code: "https://github.com/justin-henley/justin-henley.github.io",
    img: "",
  },
];
