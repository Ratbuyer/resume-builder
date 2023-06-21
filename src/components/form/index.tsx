import { useState } from "react";
import type * as types from "../../constants/types";

import Header from "./header";
import Education from "./education";
import Skills from "./skills";
import Awards from "./awards";
import Experience from "./experience";
import Projects from "./projects";


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
    />

    <Projects
      projectList={projectList}
      setProjectList={setProjectList}
    />

    <Awards
      awardsList={awardsList}
      setAwardsList={setAwardsList}
    />

  </form>

};

export default Form;