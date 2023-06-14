import { useState } from "react";
import type * as types from "../types";
import { AddButton, RemoveButton, RemoveIcon } from "./buttons";


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

    {/* =======================contacts=========================== */}
    <div className="contacts">
      <h1 className="text-xl mt-10">Contacts</h1>
      <hr className="border-none bg-gray-300 h-0.5 mt-2" />

      <div className="mt-10 bg-gray-100 pt-2 pb-2 p-3 border rounded-xl">
        <div className="mb-2 mt-2">
          <input
            type="text"
            id="name"
            autoComplete="name"
            name="name"
            value={header.name}
            placeholder="Name"
            className="w-full bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
            onChange={(e) => setHeader({ ...header, name: e.target.value })}
          />
        </div>

        <div className="flex flex-row justify justify-between mb-2">
          <input
            type="text"
            id="phone"
            autoComplete="phone"
            name="phone"
            required
            value={header.phone}
            placeholder="Phone"
            className="mr-1 w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
            onChange={(e) => setHeader({ ...header, phone: e.target.value })}
          />

          <input
            type="text"
            id="email"
            autoComplete="email"
            name="email"
            required
            value={header.email}
            placeholder="Email"
            className="w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
            onChange={(e) => setHeader({ ...header, email: e.target.value })}
          />
        </div>

        <div className="flex flex-row justify justify-between mb-2">
          <input
            type="text"
            id="github"
            name="github"
            value={header.github}
            placeholder="Github Link"
            className="mr-1 w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
            onChange={(e) => setHeader({ ...header, github: e.target.value })}
          />

          <input
            type="text"
            id="linkedin"
            name="linkedin"
            value={header.linkedin}
            placeholder="Linkedin Link"
            className="w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
            onChange={(e) => setHeader({ ...header, linkedin: e.target.value })}
          />
        </div>

      </div>
    </div>


    {/* =======================education=========================== */}
    <div className="education mt-10">
      <h1 className="text-xl">Education</h1>
      <hr className="border-none bg-gray-300 h-0.5 mt-2 mb-2" />

      {educationList.map((education, index) => (

        <div
          key={index}
          className="mb-5 mt-10 p-3 bg-gray-100 pb-5 border rounded-xl">

          <RemoveIcon
            func={() => {
              const educationListCopy = [...educationList];
              educationListCopy.splice(index, 1);
              setEducationList(educationListCopy);
            }}
          />

          <div className="flex flex-row justify justify-between mb-2">

            <input
              type="text"
              name={"school" + String(index)}
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
              name={"educationDuration" + String(index)}
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
              name={"degree" + String(index)}
              required
              value={education.degree}
              placeholder={"Degree"}
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
              name={"educationLocation" + String(index)}
              required
              value={education.location}
              placeholder={"Location"}
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

      <div className="flex flex-row justify-center">
        <AddButton
          func={() => { setEducationList([...educationList, { school: "", degree: "", duration: "", location: "" }]) }}
        />
      </div>
    </div>


    {/* =======================skills=========================== */}
    <div className="skills">
      <h1 className="text-xl mt-10">Skills</h1>
      <hr className="border-none bg-gray-300 h-0.5 mt-2 mb-2" />

      {skillsList.map((skill, index) => (
        <div
          key={index}
          className="bg-gray-100 mt-10 pt-1 pb-2 p-3 border rounded-xl"
        >

          <RemoveIcon
            func={() => {
              const skillsListCopy = [...skillsList];
              skillsListCopy.splice(index, 1);
              setSkillsList(skillsListCopy);
            }}
          />

          <input
            type="text"
            name={"skillName" + String(index)}
            required
            value={skill.name}
            placeholder={"Skill Name"}
            className="w-full bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
            onChange={(e) => {
              const skillsListcopy = [...skillsList];
              skillsListcopy[index]!.name = e.target.value;
              setSkillsList(skillsListcopy);
            }}
          />

          <textarea
            name={"skillList" + String(index)}
            required
            value={skill.skills}
            placeholder={"Skill List"}
            className="mt-2 mb-5 w-full bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
            onChange={(e) => {
              const skillsListcopy = [...skillsList];
              skillsListcopy[index]!.skills = e.target.value;
              setSkillsList(skillsListcopy);
            }}
          />

        </div>
      ))}

      <div className="flex flex-row justify-center mt-5">
        <AddButton
          func={() => { setSkillsList([...skillsList, { name: "", skills: "" }]) }}
        />
      </div>
    </div>


    {/* =======================experience=========================== */}
    <div className="experience">
      <h1 className="text-xl mt-10">Experience</h1>
      <hr className="border-none bg-gray-300 h-0.5 mt-2 mb-2" />

      {experienceList.map((experience, index0) => (

        <div
          key={index0}
          className="bg-gray-100 p-3 mt-10 border rounded-xl"
        >

          <RemoveIcon
            func={() => {
              const experienceListCopy = [...experienceList];
              experienceListCopy.splice(index0, 1);
              setExperienceList(experienceListCopy);
            }}
          />

          <h2 className="text-l mb-2">Experience {index0}</h2>

          <div className="flex flex-row justify justify-between mb-2">

            <input
              type="text"
              name={"company" + String(index0)}
              required
              value={experience.company}
              placeholder={"Company"}
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
              name={"experienceDuration" + String(index0)}
              required
              value={experience.duration}
              placeholder={"Duration"}
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
              name={"title" + String(index0)}
              required
              value={experience.title}
              placeholder={"Title"}
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
              name={"experienceLocation" + String(index0)}
              required
              defaultValue={experience.location}
              placeholder={"Location"}
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

            <div
              key={index1}
              className="flex flex-row">

              <RemoveButton
                func={() => removeExperienceContribution(index0, index1)}
              />

              <input
                type="text"
                name={"experience" + String(index1) + "contribution" + String(index1)}
                placeholder={"Contribution " + String(index1)}
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

          <AddButton
            func={() => { addExperienceContribution(index0) }}

          />

        </div>
      ))}

      <div className="flex flex-row justify-center mt-5">
        <AddButton
          func={() => {
            setExperienceList([...experienceList, {
              company: "",
              duration: "",
              title: "",
              location: "",
              contributions: [""]
            }])
          }}
        />
      </div>

    </div>

    {/* =======================projects=========================== */}
    <div className="projects">
      <h1 className="text-xl mt-10">Projects</h1>
      <hr className="border-none bg-gray-300 h-0.5 mt-2 mb-2" />

      {projectList.map((project, index0) => (
        <div
          key={index0}
          className="bg-gray-100 p-3 mt-10 border rounded-xl"
        >

          <RemoveIcon
            func={() => {
              const projectListCopy = [...projectList];
              projectListCopy.splice(index0, 1);
              setProjectList(projectListCopy);
            }}
          />

          <h2 className="text-l mb-2">Project {index0}</h2>

          <input
            type="text"
            name={"project" + String(index0)}
            required
            value={project.name}
            placeholder={"Project Name"}
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
            name={"link" + String(index0)}
            value={project.link}
            placeholder={"Project Link"}
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
            name={"projectDescription" + String(index0)}
            value={project.description}
            placeholder={"Project Description"}
            className="w-full mb-2 bg-gray-50 border border-gray-300text-gray-900 
            rounded-lg block p-2.5 outline-0"
            onChange={(e) => {
              const projectListcopy = [...projectList];
              projectListcopy[index0]!.description = e.target.value;
              setProjectList(projectListcopy);
            }}
          />

          {project.contributions.map((contribution, index1) => (

            <div
              key={index1}
              className="flex flex-row">

              <RemoveButton
                func={() => removeProjectContribution(index0, index1)}
              />

              <input type="text"
                name={"project" + String(index0) + "contribution" + String(index1)}
                value={contribution}
                placeholder={"Contribution " + String(index1)}
                className="w-full mb-2 bg-gray-50 border border-gray-300
              text-gray-900 rounded-lg block p-2.5 outline-0"
                onChange={(e) => {
                  setProjectContribution(index0, index1, e.target.value)
                }}
              />
            </div>
          ))}

          <AddButton
            func={() => { addProjectContribution(index0) }}

          />

        </div>

      ))}

      <div className="flex flex-row justify-center mt-5">
        <AddButton
          func={() => {
            setProjectList([...projectList, {
              name: "",
              link: "",
              description: "",
              contributions: [""]
            }])
          }}
        />
      </div>

    </div>


    {/* =======================awards================================ */}

    <div className="awards">
      <h1 className="text-xl mt-10">Awards</h1>
      <hr className="border-none bg-gray-300 h-0.5 mt-2 mb-2" />

      <div className="mt-10 bg-gray-100 pt-5 p-3 border rounded-xl">
        {awardsList.map((award, index) => (
          <div key={index} className="flex flex-row">

            <RemoveButton
              func={() => {
                const awardsListCopy = [...awardsList];
                awardsListCopy.splice(index, 1);
                setAwardsList(awardsListCopy);
              }}

            />

            <input
              type="text"
              name={"award" + String(index)}
              required
              value={award}
              placeholder={"Award " + String(index)}
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

        <AddButton
          func={() => { setAwardsList([...awardsList, ""]) }}
        />

      </div>

    </div>

  </form>

};

export default Form;