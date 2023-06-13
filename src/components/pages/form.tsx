import { useState } from "react";

import * as types from "../types";
import { RefreshButton, AddButton, RemoveButton } from "./buttons";


const Form = (
  { func,
    headerprop,
    educationListprop,
    skillsListprop,
    awardsListprop,
    experienceListprop,
  }:
    {
      func: types.submitFunc,
      headerprop: types.headerType,
      educationListprop: types.educationListType,
      skillsListprop: types.skillsListType,
      awardsListprop: types.awardsListType,
      experienceListprop: types.experienceListType,
    }) => {

  const [educationList, setEducationList] = useState<types.educationListType>(educationListprop);
  const [skillsList, setSkillsList] = useState<types.skillsListType>(skillsListprop);
  const [awardsList, setAwardsList] = useState<types.awardsListType>(awardsListprop);
  const [experienceList, setExperienceList] = useState<types.experienceListType>(experienceListprop);

  const addEducation: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (educationList.length === 0) return;
    const updatedEducationList = [...educationList];
    updatedEducationList.splice(educationList.length - 1, 1);
    setEducationList(updatedEducationList);
  };

  const removeEducation: React.MouseEventHandler<HTMLButtonElement> = () => {
    setEducationList([...educationList, { school: "", degree: "", duration: "", location: "" }])
  };

  const addSkills: React.MouseEventHandler<HTMLButtonElement> = () => {
    setSkillsList([...skillsList, { name: "", skills: "" }])
  };

  const removeSkills: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (skillsList.length === 0) return;
    const skillsListcopy = [...skillsList];
    skillsListcopy.splice(skillsList.length - 1, 1);
    setSkillsList(skillsListcopy);
  };

  const addAwards = () => {
    setAwardsList([...awardsList, ""])
  };

  const removeAwards = () => {
    if (awardsList.length === 0) return;
    const awardsListcopy = [...awardsList];
    awardsListcopy.splice(awardsList.length - 1, 1);
    setAwardsList(awardsListcopy);
  }

  return <form
    onSubmit={func}
    data-education-count={educationList.length}
    data-skills-count={skillsList.length}
    data-awards-count={awardsList.length}
    data-experience-count={experienceList.length}
    data-contributions-list={experienceList.map((e) => (e.contributions.length))}
  >

    <RefreshButton />


    {/* =======================header=========================== */}
    <div className="header">
      <h1 className="text-xl">Basic Information</h1>
      <hr className="border-none bg-gray-300 h-0.5 mt-2" />

      <div className="mb-2 mt-2">
        <input type="text" id="name" name="name" required
          defaultValue={headerprop.name} placeholder="Name"
          className="w-full bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
        >
        </input>
      </div>

      <div className="flex flex-row justify justify-between mb-2">
        <input type="text" id="phone" name="phone" required
          defaultValue={headerprop.phone} placeholder="Phone"
          className="mr-1 w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
        >
        </input>

        <input type="text" id="email" name="email" required
          defaultValue={headerprop.email} placeholder="Email"
          className="w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
        >
        </input>
      </div>

      <div className="flex flex-row justify justify-between mb-2">
        <input type="text" id="github" name="github"
          defaultValue={headerprop.github} placeholder="Github Link"
          className="mr-1 w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
        >
        </input>

        <input type="text" id="linkedin" name="linkedin"
          defaultValue={headerprop.linkedin} placeholder="Linkedin Link"
          className="w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
        >
        </input>
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
            >
            </input>

            <input type="text" name={"educationDuration" + index} required
              defaultValue={education.duration} placeholder={"Duration " + index}
              className="w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
            >
            </input>

          </div>

          <div className="flex flex-row justify justify-between mb-2">
            <input type="text" name={"degree" + index} required
              defaultValue={education.degree} placeholder={"Degree " + index}
              className="mr-1 w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
            >
            </input>

            <input type="text" name={"educationLocation" + index} required
              defaultValue={education.location} placeholder={"Location " + index}
              className="w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
            >
            </input>
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
          >
          </input>

          <textarea name={"skillList" + index} required
            defaultValue={skill.skills} placeholder={"Skill List " + index}
            className="mt-2 mb-5 w-full bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
          >
          </textarea>

        </div>
      ))}

      <div className="flex flex-row justify-between">
        <RemoveButton func={removeSkills} text="Remove One Skill" />
        <AddButton func={addSkills} text="Add One Skill" />
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
            >
            </input>

            <input type="text" name={"experienceDuration" + index0} required
              defaultValue={experience.duration} placeholder={"Duration " + index0}
              className="w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
            >
            </input>
          </div>

          <div className="flex flex-row justify justify-between mb-2">
            <input type="text" name={"title" + index0} required
              defaultValue={experience.title} placeholder={"Title " + index0}
              className="mr-1 w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
            >
            </input>

            <input type="text" name={"experienceLocation" + index0} required
              defaultValue={experience.location} placeholder={"Location " + index0}
              className="w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
            >
            </input>
          </div>

          {experience.contributions.map((contribution, index1) => (
            <div key={index1}>
              <input type="text" name={"experience" + index0 + "contribution" + index1} required
                defaultValue={contribution} placeholder={"Contribution " + index1}
                className="w-full mb-2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
              >
              </input>
            </div>
          ))}

        </div>
      ))}

    </div>

    {/* =======================projects=========================== */}


    {/* =======================award================================ */}

    <div className="awards">
      <h1 className="text-xl">Awards</h1>
      <hr className="border-none bg-gray-300 h-0.5 mt-2 mb-2" />

      {awardsList.map((award, index) => (
        <div key={index}>
          <input type="text" name={"award" + index} required
            defaultValue={award} placeholder={"Award " + index}
            className="w-full mb-2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
          >
          </input>
        </div>
      ))}

      <div className="flex flex-row justify-between mt-5">
        <RemoveButton func={removeAwards} text="Remove One Award" />
        <AddButton func={addAwards} text="Add One Award" />
      </div>
    </div>

  </form>

};

export default Form;
