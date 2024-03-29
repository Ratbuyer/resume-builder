import type * as types from "./types";

export const header: types.headerType = {
  name: "John Doe",
  phone: "+1 345-322-1291",
  email: "JohnDoe@gmail.com",
  github: "https://github.com/",
  linkedin: "",
};

export const educationList: types.educationListType = [
  {
    school: "University of California", degree: "Bachelor of Science in Computer Science",
    duration: "Sep 2000 - Jun 2003", location: "California, USA"
  },
  {
    school: "University of Waterloo", degree: "Master of Aplied Science of Computing",
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
      "Created 12 pages for the companies website",
      "Developed a web application using React, Next.js, and Tailwind CSS",
      "Extracted 40 components and 11 Tailwind CSS styles to improve code quality",
    ],
  },
  {
    company: "Google",
    title: "Web Developer",
    duration: "Jan 2014 - Jun 2015",
    location: "New York, USA",
    contributions: [
      "Made a web application using React, Next.js, and Tailwind CSS to allow users to create and share their own recipes",
      "Deployed the project on Vercel and recieved over 1000 views in the first week",
      "Communicated with the design team to improve the front end experience",
    ],
  }
];

export const projectList: types.projectsListType = [
  {
    name: "Personal Website",
    link: "https://resumedev.site/",
    description: "Java 8, Spring Boot, MySQL, Docker, Kubernetes, AWS, GCP, Azure",
    contributions: [
      "Developed and deployed a personal website using React Typescript, Next.js, and Tailwind CSS for generating resumes",
      "The website recieved over 200 view in the first month",
      "This resume was generated using the website",
    ],
  },
  {
    name: "Circuit Design Game",
    link: "",
    description: "Pygame (Python), C, C++, Java, JavaScript, TypeScript",
    contributions: [
      "Independently developed and deployed a game using React, Next.js, and Tailwind CSS",
      "The game educates users on the basics of circuit design",
      "The game recieved over 187 registered users in the first month",
    ],
  },
];

export const awardsList: types.awardsListType = [
  "Dean's List Scholar - 2022, 2023 Winter",
  "University Of Waterloo In-Course Scholarships - 2021",
];

export const settings: types.settingsType = {
  color: "White",
  font: "Montserrat",
  boldNumbers: true,
  fontSize: 10,
  template: "Jake",
};