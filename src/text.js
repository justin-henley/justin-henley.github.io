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
    link: "",
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
