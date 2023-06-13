import { useState } from "react";

import * as types from "../types";
import { RefreshButton, AddButton, RemoveButton, AddButtonStyle } from "./buttons";


const Form = (
  { func,
    headerprop,
    educationListprop,
    skillsListprop,
    awardsListprop,
    experienceListprop,
    projectListprop,
  }:
    {
      func: types.submitFunc,
      headerprop: types.headerType,
      educationListprop: types.educationListType,
      skillsListprop: types.skillsListType,
      awardsListprop: types.awardsListType,
      experienceListprop: types.experienceListType,
      projectListprop: types.projectsListType,
    }) => {

  const [educationList, setEducationList] = useState<types.educationListType>(educationListprop);
  const [skillsList, setSkillsList] = useState<types.skillsListType>(skillsListprop);
  const [awardsList, setAwardsList] = useState<types.awardsListType>(awardsListprop);
  const [experienceList, setExperienceList] = useState<types.experienceListType>(experienceListprop);
  const [projectList, setProjectList] = useState<types.projectsListType>(projectListprop);

  const addEducation: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (educationList.length === 0) return;
    const updatedEducationList = [...educationList];
    updatedEducationList.splice(educationList.length - 1, 1);
    setEducationList(updatedEducationList);
  };

  const removeEducation: React.MouseEventHandler<HTMLButtonElement> = () => {
    setEducationList([...educationList, { school: "", degree: "", duration: "", location: "" }])
  };

  const addSkill: React.MouseEventHandler<HTMLButtonElement> = () => {
    setSkillsList([...skillsList, { name: "", skills: "" }])
  };

  const removeSkill: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (skillsList.length === 0) return;
    const skillsListcopy = [...skillsList];
    skillsListcopy.splice(skillsList.length - 1, 1);
    setSkillsList(skillsListcopy);
  };

  const addAward = () => {
    setAwardsList([...awardsList, ""])
  };

  const removeAward = () => {
    if (awardsList.length === 0) return;
    const awardsListcopy = [...awardsList];
    awardsListcopy.splice(awardsList.length - 1, 1);
    setAwardsList(awardsListcopy);
  }

  const addExperience = () => {
    setExperienceList([...experienceList, {
      company: "",
      title: "",
      duration: "",
      location: "",
      contributions: [""],
    }])
  };

  const removeExperience = () => {
    if (experienceList.length === 0) return;
    const experienceListcopy = [...experienceList];
    experienceListcopy.splice(experienceList.length - 1, 1);
    setExperienceList(experienceListcopy);
  };

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

  const removeProject = () => {
    if (projectList.length === 0) return;
    const projectListcopy = [...projectList];
    projectListcopy.splice(projectList.length - 1, 1);
    setProjectList(projectListcopy);
  };

  const addProject = () => {
    setProjectList([...projectList, {
      name: "",
      link: "",
      description: "",
      contributions: [""],
    }])
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

  return <form
    onSubmit={func}
    data-education-count={educationList.length}
    data-skills-count={skillsList.length}
    data-awards-count={awardsList.length}
    data-experience-count={experienceList.length}
    data-experience-contributions-list={experienceList.map((e) => (e.contributions.length))}
    data-projects-count={projectList.length}
    data-project-contributions-list={projectList.map((e) => (e.contributions.length))}
  >

    <RefreshButton />


    {/* =======================header=========================== */}
    <div className="header">
      <h1 className="text-xl mt-3">Basic Information</h1>
      <hr className="border-none bg-gray-300 h-0.5 mt-2" />

      <div className="mb-2 mt-2">
        <input type="text" id="name" name="name" required
          defaultValue={headerprop.name} placeholder="Name"
          className="w-full bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
        />
      </div>

      <div className="flex flex-row justify justify-between mb-2">
        <input type="text" id="phone" name="phone" required
          defaultValue={headerprop.phone} placeholder="Phone"
          className="mr-1 w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
        />

        <input type="text" id="email" name="email" required
          defaultValue={headerprop.email} placeholder="Email"
          className="w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
        />
      </div>

      <div className="flex flex-row justify justify-between mb-2">
        <input type="text" id="github" name="github"
          defaultValue={headerprop.github} placeholder="Github Link"
          className="mr-1 w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
        />


        <input type="text" id="linkedin" name="linkedin"
          defaultValue={headerprop.linkedin} placeholder="Linkedin Link"
          className="w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
        />

      </div>
    </div>

    {/* =======================education=========================== */}

    <div className="education">
      <h1 className="text-xl">Education</h1>
      <hr className="border-none bg-gray-300 h-0.5 mt-2 mb-2" />

      {educationList.map((education, index) => (

        <div key={index} className="mb-5">

          <div className="flex flex-row justify justify-between mb-2">

            <input type="text" name={"school" + index} required
              defaultValue={education.school} placeholder={"School " + index}
              className="mr-1 w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
            />

            <input type="text" name={"educationDuration" + index} required
              defaultValue={education.duration} placeholder={"Duration " + index}
              className="w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
            />

          </div>

          <div className="flex flex-row justify justify-between mb-2">
            <input type="text" name={"degree" + index} required
              defaultValue={education.degree} placeholder={"Degree " + index}
              className="mr-1 w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
            />

            <input type="text" name={"educationLocation" + index} required
              defaultValue={education.location} placeholder={"Location " + index}
              className="w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
            />

          </div>

        </div>
      ))}

      <div className="flex flex-row justify-between">
        <RemoveButton func={addEducation} text="Remove One Education" />
        <AddButton func={removeEducation} text="Add One Education" />
      </div>
    </div>

    {/* =======================skills=========================== */}

    <div className="skills">
      <h1 className="text-xl">Skills</h1>
      <hr className="border-none bg-gray-300 h-0.5 mt-2 mb-2" />

      {skillsList.map((skill, index) => (
        <div key={index}>
          <input type="text" name={"skillName" + index} required
            defaultValue={skill.name} placeholder={"Skill Name " + index}
            className="w-full bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
          />

          <textarea name={"skillList" + index} required
            defaultValue={skill.skills} placeholder={"Skill List " + index}
            className="mt-2 mb-5 w-full bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
          />

        </div>
      ))}

      <div className="flex flex-row justify-between">
        <RemoveButton func={removeSkill} text="Remove One Skill" />
        <AddButton func={addSkill} text="Add One Skill" />
      </div>
    </div>

    {/* =======================experience=========================== */}

    <div className="experience">
      <h1 className="text-xl">Experience</h1>
      <hr className="border-none bg-gray-300 h-0.5 mt-2 mb-2" />

      {experienceList.map((experience, index0) => (
        <div key={index0}>

          <h2 className="text-l mb-2">Experience {index0}</h2>

          <div className="flex flex-row justify justify-between mb-2">
            <input type="text" name={"company" + index0} required
              defaultValue={experience.company} placeholder={"Company " + index0}
              className="mr-1 w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
            />

            <input type="text" name={"experienceDuration" + index0} required
              defaultValue={experience.duration} placeholder={"Duration " + index0}
              className="w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
            />

          </div>

          <div className="flex flex-row justify justify-between mb-2">
            <input type="text" name={"title" + index0} required
              defaultValue={experience.title} placeholder={"Title " + index0}
              className="mr-1 w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
            />

            <input type="text" name={"experienceLocation" + index0} required
              defaultValue={experience.location} placeholder={"Location " + index0}
              className="w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
            />
          </div>

          {experience.contributions.map((contribution, index1) => (

            <div key={index1} className="flex flex-row">
              <RemoveButton func={
                () => removeExperienceContribution(index0, index1)
              } text="" />
              <input type="text" name={"experience" + index0 + "contribution" + index1}
                defaultValue={contribution} placeholder={"Contribution " + index1}
                className="w-full mb-2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
              />
            </div>
          ))}

          <AddButtonStyle func={() => { addExperienceContribution(index0) }}
            text="Add One Contribution" style="w-10 h-10 mt-1 border bg-gray-100 
      flex items-center justify-center rounded-full"/>

        </div>
      ))}

      <div className="flex flex-row justify-between mt-5">
        <RemoveButton func={removeExperience} text="Remove One Experience" />
        <AddButton func={addExperience} text="Add One Experience" />
      </div>

    </div>

    {/* =======================projects=========================== */}
    <div className="projects">
      <h1 className="text-xl">Projects</h1>
      <hr className="border-none bg-gray-300 h-0.5 mt-2 mb-2" />

      {projectList.map((project, index0) => (
        <div key={index0}>

          <h2 className="text-l mb-2">Project {index0}</h2>

          <input type="text" name={"project" + index0} required
            defaultValue={project.name} placeholder={"Project Name " + index0}
            className="w-full mb-2 bg-gray-50 border border-gray-300
 text-gray-900 rounded-lg block p-2.5 outline-0"
          />

          <input type="text" name={"link" + index0}
            defaultValue={project.link} placeholder={"Project Link " + index0}
            className="w-full mb-2 bg-gray-50 border border-gray-300
 text-gray-900 rounded-lg block p-2.5 outline-0"
          />

          <input type="text" name={"projectDescription" + index0}
            defaultValue={project.description} placeholder={"Project Description " + index0}
            className="w-full mb-2 bg-gray-50 border border-gray-300
 text-gray-900 rounded-lg block p-2.5 outline-0"
          />

          {project.contributions.map((contribution, index1) => (

            <div key={index1} className="flex flex-row">
              <RemoveButton func={
                () => removeProjectContribution(index0, index1)
              } text="" />
              <input type="text" name={"project" + index0 + "contribution" + index1}
                defaultValue={contribution} placeholder={"Contribution " + index1}
                className="w-full mb-2 bg-gray-50 border border-gray-300
text-gray-900 rounded-lg block p-2.5 outline-0"
              />
            </div>
          ))}

          <AddButtonStyle func={() => { addProjectContribution(index0) }}
            text="Add One Contribution" style="w-10 h-10 mt-1 border bg-gray-100 
      flex items-center justify-center rounded-full"/>

        </div>

      ))}

      <div className="flex flex-row justify-between mt-5">
        <RemoveButton func={removeProject} text="Remove One Project" />
        <AddButton func={addProject} text="Add One Project" />
      </div>

    </div>



    {/* =======================awards================================ */}

    <div className="awards">
      <h1 className="text-xl">Awards</h1>
      <hr className="border-none bg-gray-300 h-0.5 mt-2 mb-2" />

      {awardsList.map((award, index) => (
        <div key={index}>
          <input type="text" name={"award" + index} required
            defaultValue={award} placeholder={"Award " + index}
            className="w-full mb-2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
          />
        </div>
      ))}

      <div className="flex flex-row justify-between mt-5">
        <RemoveButton func={removeAward} text="Remove One Award" />
        <AddButton func={addAward} text="Add One Award" />
      </div>
    </div>

  </form>

};

export default Form;
