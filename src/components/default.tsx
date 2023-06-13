import * as types from "./types";

export const header: types.headerType = {
  name: "Name",
  phone: "+1 111-111-1111",
  email: "Example@gmail.com",
  github: "",
  linkedin: "",
};

export const educationList: types.educationListType = [
  {
    school: "University of Example 0", degree: "Bachelor of Science",
    duration: "Sep 2020 - Jun 2024", location: "Location 0"
  },
  {
    school: "University of Example 1", degree: "Master of Aplied Science",
    duration: "Sep 2019 - Jun 2023", location: "Location 1"
  },
];

export const skillsList: types.skillsListType = [
  { name: "Languages", skills: "C, C++, Python, Java, JavaScript, TypeScript" },
  { name: "Frameworks", skills: "React, Next.js, Node.js, Express.js, Tailwind CSS, Bootstrap" },
];

export const experienceList: types.experienceListType = [
  {
    company: "Company 0",
    title: "Software Engineer",
    duration: "Jan 2020 - Jun 2024",
    location: "Location 0",
    contributions: [
      "Translate UI designs on Adobe XD and Figma into Typescript React codes",
      "Developed a web application using React, Next.js, and Tailwind CSS",
      `Extracted repeated components and Tailwind CSS styles to 
      improve overall code quality and adhere to SOLID principles`,
    ],
  },
  {
    company: "Company 1",
    title: "Software Engineer 1",
    duration: "Jan 2020 - Jun 2024 1",
    location: "Location 1",
    contributions: [
      "Translate UI designs on Adobe XD and Figma into Typescript React codes",
      "Developed a web application using React, Next.js, and Tailwind CSS",
    ],
  }
];

export const awardsList: types.awardsListType = [
  "Award 1",
  "Award 2",
];
