import { useState } from "react";
import type * as types from "../../constants/types";

import Header from "./form/header";
import Education from "./form/education";
import Skills from "./form/skills";
import Awards from "./form/awards";
import Experience from "./form/experience";
import Projects from "./form/projects";


const Form = (
  { func,
    headerprop,
    educationListprop,
    skillsListprop,
    awardsListprop,
    experienceListprop,
    projectListprop,
    refObject,
  }:
    {
      func: types.submitFunc,
      headerprop: types.headerType,
      educationListprop: types.educationListType,
      skillsListprop: types.skillsListType,
      awardsListprop: types.awardsListType,
      experienceListprop: types.experienceListType,
      projectListprop: types.projectsListType,
      refObject: React.RefObject<HTMLFormElement>,
    }) => {

  const [header, setHeader] = useState<types.headerType>(headerprop);
  const [educationList, setEducationList] = useState<types.educationListType>(educationListprop);
  const [skillsList, setSkillsList] = useState<types.skillsListType>(skillsListprop);
  const [awardsList, setAwardsList] = useState<types.awardsListType>(awardsListprop);
  const [experienceList, setExperienceList] = useState<types.experienceListType>(experienceListprop);
  const [projectList, setProjectList] = useState<types.projectsListType>(projectListprop);


  const removeExperienceContribution = (i: number, j: number) => {
    const experienceListcopy = [...experienceList];
    experienceListcopy[i]?.contributions.splice(j, 1);
    setExperienceList(experienceListcopy);
  };

  const addExperienceContribution = (i: number) => {
    const experienceListcopy = [...experienceList];
    experienceListcopy[i]?.contributions.push("");
    setExperienceList(experienceListcopy);
  };

  const setExperienceContribution = (i: number, j: number, value: string) => {
    const experienceListcopy = [...experienceList];
    experienceListcopy[i]!.contributions[j] = value;
    setExperienceList(experienceListcopy);
  };

  const removeProjectContribution = (i: number, j: number) => {
    const projectListcopy = [...projectList];
    projectListcopy[i]?.contributions.splice(j, 1);
    setProjectList(projectListcopy);
  };

  const addProjectContribution = (i: number) => {
    const projectListcopy = [...projectList];
    projectListcopy[i]?.contributions.push("");
    setProjectList(projectListcopy);
  };

  const setProjectContribution = (i: number, j: number, value: string) => {
    const projectListcopy = [...projectList];
    projectListcopy[i]!.contributions[j] = value;
    setProjectList(projectListcopy);
  };

  return <form
    ref={refObject}
    onSubmit={func}
    className="ml-3 mr-3"
    data-header={JSON.stringify(header)}
    data-education-list={JSON.stringify(educationList)}
    data-skills-list={JSON.stringify(skillsList)}
    data-awards-list={JSON.stringify(awardsList)}
    data-experience-list={JSON.stringify(experienceList)}
    data-projects-list={JSON.stringify(projectList)}
  >

    <Header
      header={header}
      setHeader={setHeader}
    />

    <Education
      educationList={educationList}
      setEducationList={setEducationList}
    />

    <Skills
      skillsList={skillsList}
      setSkillsList={setSkillsList}
    />

    <Experience
      experienceList={experienceList}
      setExperienceList={setExperienceList}
      removeExperienceContribution={removeExperienceContribution}
      addExperienceContribution={addExperienceContribution}
      setExperienceContribution={setExperienceContribution}
    />

    <Projects
      projectList={projectList}
      setProjectList={setProjectList}
      removeProjectContribution={removeProjectContribution}
      addProjectContribution={addProjectContribution}
      setProjectContribution={setProjectContribution}
    />

    <Awards
      awardsList={awardsList}
      setAwardsList={setAwardsList}
    />

  </form>

};

export default Form;