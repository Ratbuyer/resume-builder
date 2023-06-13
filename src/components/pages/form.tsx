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

  const setExperienceContribution = (i: number, j: number, value: string) => {
    const experienceListcopy = [...experienceList];
    experienceListcopy[i]!.contributions[j] = value;
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

  const setProjectContribution = (i: number, j: number, value: string) => {
    const projectListcopy = [...projectList];
    projectListcopy[i]!.contributions[j] = value;
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
    className="ml-5 mr-5"
  >

    <RefreshButton />


    {/* =======================contacts=========================== */}
    <div className="contacts">
      <h1 className="text-xl mt-3">Contacts</h1>
      <hr className="border-none bg-gray-300 h-0.5 mt-2" />

      <div className="mt-10 bg-gray-100 pt-2 pb-2 p-3 border rounded-xl">
        <div className="mb-2 mt-2">
          <input
            type="text"
            id="name"
            autoComplete="name"
            name="name"
            required
            defaultValue={headerprop.name}
            placeholder="Name"
            className="w-full bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
          />
        </div>

        <div className="flex flex-row justify justify-between mb-2">
          <input
            type="text"
            id="phone"
            autoComplete="phone"
            name="phone"
            required
            defaultValue={headerprop.phone}
            placeholder="Phone"
            className="mr-1 w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
          />

          <input
            type="text"
            id="email"
            autoComplete="email"
            name="email"
            required
            defaultValue={headerprop.email}
            placeholder="Email"
            className="w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
          />
        </div>

        <div className="flex flex-row justify justify-between mb-2">
          <input
            type="text"
            id="github"
            name="github"
            defaultValue={headerprop.github}
            placeholder="Github Link"
            className="mr-1 w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
          />

          <input
            type="text"
            id="linkedin"
            name="linkedin"
            defaultValue={headerprop.linkedin}
            placeholder="Linkedin Link"
            className="w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
          />
        </div>

      </div>
    </div>

    {/* =======================education=========================== */}

    <div className="education mt-10">
      <h1 className="text-xl">Education</h1>
      <hr className="border-none bg-gray-300 h-0.5 mt-2 mb-2" />

      {educationList.map((education, index) => (

        <div key={index} className="mb-5 mt-10 p-3 bg-gray-100 pt-5 border rounded-xl">

          <div className="flex flex-row justify justify-between mb-2">

            <input
              type="text"
              name={"school" + index}
              required
              value={education.school}
              placeholder={"School"}
              className="mr-1 w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
              onChange={(e) => {
                const educationListcopy = [...educationList];
                educationListcopy[index]!.school = e.target.value;
                setEducationList(educationListcopy);
              }}
            />

            <input
              type="text"
              name={"educationDuration" + index}
              required
              value={education.duration}
              placeholder={"Duration"}
              className="w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
              onChange={(e) => {
                const educationListcopy = [...educationList];
                educationListcopy[index]!.duration = e.target.value;
                setEducationList(educationListcopy);
              }}
            />

          </div>

          <div className="flex flex-row justify justify-between mb-2">
            <input
              type="text"
              name={"degree" + index}
              required
              value={education.degree}
              placeholder={"Degree " + index}
              className="mr-1 w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
              onChange={(e) => {
                const educationListcopy = [...educationList];
                educationListcopy[index]!.degree = e.target.value;
                setEducationList(educationListcopy);
              }}
            />

            <input
              type="text"
              name={"educationLocation" + index}
              required
              value={education.location}
              placeholder={"Location " + index}
              className="w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
              onChange={(e) => {
                const educationListcopy = [...educationList];
                educationListcopy[index]!.location = e.target.value;
                setEducationList(educationListcopy);
              }}
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
      <h1 className="text-xl mt-10">Skills</h1>
      <hr className="border-none bg-gray-300 h-0.5 mt-2 mb-2" />

      {skillsList.map((skill, index) => (
        <div key={index} className="bg-gray-100 mt-10 pt-8 p-3 border rounded-xl">
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
      <h1 className="text-xl mt-10">Experience</h1>
      <hr className="border-none bg-gray-300 h-0.5 mt-2 mb-2" />

      {experienceList.map((experience, index0) => (
        <div key={index0} className="bg-gray-100 p-3 mt-10 border rounded-xl">

          <h2 className="text-l mb-2">Experience {index0}</h2>

          <div className="flex flex-row justify justify-between mb-2">

            <input
              type="text"
              name={"company" + index0}
              required
              value={experience.company}
              placeholder={"Company " + index0}
              className="mr-1 w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
              onChange={(e) => {
                const experienceListcopy = [...experienceList];
                experienceListcopy[index0]!.company = e.target.value;
                setExperienceList(experienceListcopy);
              }}
            />

            <input
              type="text"
              name={"experienceDuration" + index0}
              required
              value={experience.duration}
              placeholder={"Duration " + index0}
              className="w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
              onChange={(e) => {
                const experienceListcopy = [...experienceList];
                experienceListcopy[index0]!.duration = e.target.value;
                setExperienceList(experienceListcopy);
              }}
            />

          </div>

          <div className="flex flex-row justify justify-between mb-2">
            <input
              type="text"
              name={"title" + index0}
              required
              value={experience.title}
              placeholder={"Title " + index0}
              className="mr-1 w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
              onChange={(e) => {
                const experienceListcopy = [...experienceList];
                experienceListcopy[index0]!.title = e.target.value;
                setExperienceList(experienceListcopy);
              }}
            />

            <input
              type="text"
              name={"experienceLocation" + index0}
              required
              defaultValue={experience.location}
              placeholder={"Location " + index0}
              className="w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
              onChange={(e) => {
                const experienceListcopy = [...experienceList];
                experienceListcopy[index0]!.location = e.target.value;
                setExperienceList(experienceListcopy);
              }}
            />
          </div>

          {experience.contributions.map((contribution, index1) => (

            <div key={index1} className="flex flex-row">
              <RemoveButton func={
                () => removeExperienceContribution(index0, index1)
              } text="" />
              <input
                type="text"
                name={"experience" + index0 + "contribution" + index1}
                placeholder={"Contribution " + index1}
                className="w-full mb-2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
                onChange={(e) => {
                  console.log("here")
                  setExperienceContribution(index0, index1, e.target.value)
                }}
                value={contribution}
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
      <h1 className="text-xl mt-10">Projects</h1>
      <hr className="border-none bg-gray-300 h-0.5 mt-2 mb-2" />

      {projectList.map((project, index0) => (
        <div key={index0} className="bg-gray-100 p-3 mt-10 border rounded-xl">

          <h2 className="text-l mb-2">Project {index0}</h2>

          <input
            type="text"
            name={"project" + index0}
            required
            value={project.name}
            placeholder={"Project Name " + index0}
            className="w-full mb-2 bg-gray-50 border border-gray-300
 text-gray-900 rounded-lg block p-2.5 outline-0"
            onChange={(e) => {
              const projectListcopy = [...projectList];
              projectListcopy[index0]!.name = e.target.value;
              setProjectList(projectListcopy);
            }}
          />

          <input
            type="text"
            name={"link" + index0}
            value={project.link}
            placeholder={"Project Link " + index0}
            className="w-full mb-2 bg-gray-50 border border-gray-300
 text-gray-900 rounded-lg block p-2.5 outline-0"
            onChange={(e) => {
              const projectListcopy = [...projectList];
              projectListcopy[index0]!.link = e.target.value;
              setProjectList(projectListcopy);
            }}
          />

          <input
            type="text"
            name={"projectDescription" + index0}
            value={project.description}
            placeholder={"Project Description " + index0}
            className="w-full mb-2 bg-gray-50 border border-gray-300
 text-gray-900 rounded-lg block p-2.5 outline-0"
            onChange={(e) => {
              const projectListcopy = [...projectList];
              projectListcopy[index0]!.description = e.target.value;
              setProjectList(projectListcopy);
            }}
          />

          {project.contributions.map((contribution, index1) => (

            <div key={index1} className="flex flex-row">
              <RemoveButton func={
                () => removeProjectContribution(index0, index1)
              } text="" />
              <input type="text"
                name={"project" + index0 + "contribution" + index1}
                value={contribution}
                placeholder={"Contribution " + index1}
                className="w-full mb-2 bg-gray-50 border border-gray-300
text-gray-900 rounded-lg block p-2.5 outline-0"
                onChange={(e) => {
                  setProjectContribution(index0, index1, e.target.value)
                }}
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
      <h1 className="text-xl mt-10">Awards</h1>
      <hr className="border-none bg-gray-300 h-0.5 mt-2 mb-2" />

      <div className="mt-10 bg-gray-100 pt-5 p-3 border rounded-xl">
        {awardsList.map((award, index) => (
          <div key={index}>
            <input
              type="text"
              name={"award" + index}
              required
              value={award}
              placeholder={"Award " + index}
              className="w-full mb-2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
              onChange={(e) => {
                const awardsListcopy = [...awardsList];
                awardsListcopy[index] = e.target.value;
                setAwardsList(awardsListcopy);
              }}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-row justify-between mt-5">
        <RemoveButton func={removeAward} text="Remove One Award" />
        <AddButton func={addAward} text="Add One Award" />
      </div>
    </div>

  </form>

};

export default Form;
