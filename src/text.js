import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
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
};

export const social = {
  github: {
    link: "https://github.com/justin-henley",
    linkText: "Github",
    icon: <FaGithub />,
  },
  linkedin: {
    link: "https://www.linkedin.com/in/justin-henley/",
    linkText: "Linkedin",
    icon: <FaLinkedin />,
  },
  twitter: {
    link: "https://twitter.com/jah_dev",
    linkText: "Twitter",
    icon: <FaTwitter />,
  },
  email: {
    link: "",
    linkText: "E-mail",
    icon: <FaEnvelope />,
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
