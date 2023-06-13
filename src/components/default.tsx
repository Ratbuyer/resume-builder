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

export const awardsList: types.awardsListType = [
  "Award 1", 
  "Award 2",
];
