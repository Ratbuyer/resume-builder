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