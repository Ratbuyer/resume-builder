import type * as types from "./types";
import { COLORTABLE, FONTS } from "./constants";

export const header: types.headerType = {
  name: "John Doe",
  phone: "+1 345-322-1291",
  email: "JohnDoe@gmail.com",
  github: "",
  linkedin: "",
};

export const educationList: types.educationListType = [
  {
    school: "University of California", degree: "Bachelor of Science",
    duration: "Sep 2000 - Jun 2003", location: "California, USA"
  },
  {
    school: "University of Waterloo", degree: "Master of Aplied Science",
    duration: "Sep 2020 - Jun 2023", location: "Waterloo, Canada"
  },
];

export const skillsList: types.skillsListType = [
  { name: "Languages", skills: "C, C++, Python, Java, JavaScript, TypeScript" },
  { name: "Frameworks", skills: "React, Next.js, Node.js, Express.js, Tailwind CSS, Bootstrap" },
  { name: "Tools", skills: "Git, Docker, Kubernetes, AWS, GCP, Azure" },
];

export const experienceList: types.experienceListType = [
  {
    company: "Amazon",
    title: "Software Engineer",
    duration: "Jan 2020 - Jun 2024",
    location: "Seattle, USA",
    contributions: [
      "Translate UI designs on Adobe XD and Figma into Typescript React codes",
      "Developed a web application using React, Next.js, and Tailwind CSS",
      "Extracted repeated components and Tailwind CSS styles to improve code quality",
    ],
  },
  {
    company: "Google",
    title: "Web Developer",
    duration: "Jan 2014 - Jun 2015",
    location: "New York, USA",
    contributions: [
      "Made a web application using React, Next.js, and Tailwind CSS",
      "Created mutliple components and Tailwind CSS styles to improve code quality",
      "Communicated with the team to improve the overall quality of the project",
    ],
  }
];

export const projectList: types.projectsListType = [
  {
    name: "Personal Website",
    link: "",
    description: "Java 8, Spring Boot, MySQL, Docker, Kubernetes, AWS, GCP, Azure",
    contributions: [
      "Independently developed a personal website using React, Next.js, and Tailwind CSS",
      "Write a script to automate the deployment process using Docker and Kubernetes",
      "Extracted repeated components and Tailwind CSS styles to improve",
    ],
  },
  {
    name: "Circuit Design Game",
    link: "",
    description: "Pygame (Python), C, C++, Java, JavaScript, TypeScript",
    contributions: [
      "Independently developed a game using React, Next.js, and Tailwind CSS",
      "The game educates users on the basics of circuit design",
      "Extracted repeated components and Tailwind CSS styles to improve",
    ],
  },
];

export const awardsList: types.awardsListType = [
  "Dean's List Scholar - 2022 Winter",
  "Dr. James A. and Connie P. Dickson Scholarship In Science and Mathematics - 2020, 2021",
  "University Of Waterloo In-Course Scholarships - 2021",
];

export const settings: types.settingsType = {
  color: COLORTABLE ? COLORTABLE[4] ? COLORTABLE[4][1] : "White" : "White",
  font: FONTS[0] ? FONTS[0] : "Roboto",
};
