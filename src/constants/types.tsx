export type submitFunc = (e: React.FormEvent<HTMLFormElement>) => void;

export type headerType = {
  name: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
};

export type educationListType = {
  school: string;
  degree: string;
  duration: string;
  location: string;
}[];

export type skillsListType = {
  name: string;
  skills: string;
}[];

export type experienceListType = {
  company: string,
  title: string
  duration: string,
  location: string,
  contributions: string[],
}[];

export type projectsListType = {
  name: string,
  link: string,
  description: string,
  contributions: string[],
}[];

export type awardsListType = string[];

export type settingsType = {
  color: string,
  font: string,
  boldNumbers: boolean,
  fontSize: number,
  template: string,
};


export interface TemplateProps {
  header: headerType;
  educationList: educationListType;
  skillsList: skillsListType;
  experienceList: experienceListType;
  projectList: projectsListType;
  awardsList: awardsListType;
  settings: settingsType;
}

export interface TemplatesType {
  [key: string]: React.FC<TemplateProps>;
}
