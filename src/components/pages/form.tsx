import { useState } from "react";

import Refresh from "../../../public/refresh.svg";
import { PlusIcon } from "./icons";
import { MinusIcon } from "./icons";

import * as type from "../types";

const Form = (
  { func,
    header,
    educationListprop,
    skillsListprop,
    awardsListprop }:
    {
      func: type.submitFunc,
      header: type.headerType,
      educationListprop: type.educationListType,
      skillsListprop: type.skillsListType,
      awardsListprop: type.awardsListType,
    }) => {

  const [educationList, setEducationList] = useState<type.educationListType>(educationListprop);

  const [skillsList, setSkillsList] = useState<type.skillsListType>(skillsListprop);

  const [awardsList, setAwardsList] = useState<type.awardsListType>(awardsListprop);


  return <form
    onSubmit={func}
    data-education-count={educationList.length}
    data-skills-count={skillsList.length}
    data-awards-count={awardsList.length}
  >


    <div className="fixed top-1/2 left-1/2 group flex">
      <button type="submit"
        className="w-10 h-10 mt-2 bg-gray-100 hover:scale-110 
        flex items-center justify-center rounded-full">
        <Refresh />
      </button>
      <p className="hidden group-hover:block ml-2 text-gray-600">reload pdf</p>
    </div>


    {/* =======================header=========================== */}


    <h1 className="text-xl">Basic Information</h1>
    <hr className="border-none bg-gray-300 h-0.5 mt-2" />

    <div className="mb-2 mt-2">
      <input type="text" id="name" name="name" required
        defaultValue={header.name} placeholder="Name"
        className="w-full bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
      >
      </input>
    </div>

    <div className="flex flex-row justify justify-between mb-2">
      <input type="text" id="phone" name="phone" required
        defaultValue={header.phone} placeholder="Phone"
        className="mr-1 w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
      >
      </input>

      <input type="text" id="email" name="email" required
        defaultValue={header.email} placeholder="Email"
        className="w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
      >
      </input>
    </div>

    <div className="flex flex-row justify justify-between mb-2">
      <input type="text" id="github" name="github"
        defaultValue={header.github} placeholder="Github Link"
        className="mr-1 w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
      >
      </input>

      <input type="text" id="linkedin" name="linkedin"
        defaultValue={header.linkedin} placeholder="Linkedin Link"
        className="w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
      >
      </input>
    </div>


    {/* =======================education=========================== */}


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

          <input type="text" name={"duration" + index} required
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

          <input type="text" name={"location" + index} required
            defaultValue={education.location} placeholder={"Location " + index}
            className="w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
          >
          </input>
        </div>

      </div>
    ))}

    <div className="flex flex-row justify-between">
      <div className="group flex">
        <button type="button" onClick={() => {
          if (educationList.length === 0) return;
          const updatedEducationList = [...educationList];
          updatedEducationList.splice(educationList.length - 1, 1);
          setEducationList(updatedEducationList);
        }}
          className="w-10 h-10 mr-3 mt-1 border hover:scale-110
           bg-gray-100 flex items-center justify-center rounded-full">
          <MinusIcon />
        </button>
        <p className="hidden group-hover:block text-gray-600">remove one education</p>
      </div>

      <div className="flex group">
        <p className="hidden mr-2 group-hover:block text-gray-600">add one education</p>
        <button type="button" onClick={() => {
          setEducationList([...educationList, { school: "", degree: "", duration: "", location: "" }])
        }}
          className="w-10 h-10 mr-1 mt-1 border bg-gray-100 flex items-center justify-center rounded-full">
          <PlusIcon />
        </button>
      </div>
    </div>


    {/* =======================skills=========================== */}


    <h1 className="text-xl">Skills</h1>
    <hr className="border-none bg-gray-300 h-0.5 mt-2 mb-2" />

    {skillsList.map((skill, index) => (
      <div key={index}>
        <input type="text" name={"skillName" + index} required
          defaultValue={skill.name} placeholder={"Skill Name" + index}
          className="w-full bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
        >
        </input>

        <textarea name={"skillList" + index} required
          defaultValue={skill.skills} placeholder={"Skill List" + index}
          className="mt-2 mb-5 w-full bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
        >
        </textarea>

      </div>
    ))}

    <div className="flex flex-row justify-between">

      <div className="flex group">
        <button type="button" onClick={() => {
          if (skillsList.length === 0) return;
          const skillsListcopy = [...skillsList];
          skillsListcopy.splice(skillsList.length - 1, 1);
          setSkillsList(skillsListcopy);
        }}
          className="w-10 h-10 mr-3 mt-1 border bg-gray-100 flex items-center justify-center rounded-full">
          <MinusIcon />
        </button>
        <p className="hidden group-hover:block text-gray-600">remove one skill</p>
      </div>

      <div className="flex group">
        <p className="hidden mr-2 group-hover:block text-gray-600">add one skill</p>
        <button type="button" onClick={() => {
          setSkillsList([...skillsList, { name: "", skills: "" }])
        }}
          className="w-10 h-10 mr-1 mt-1 border bg-gray-100 flex items-center justify-center rounded-full">
          <PlusIcon />
        </button>
      </div>
    </div>

    {/* =======================award================================ */}
        <h1 className="text-xl">Awards</h1>
    <hr className="border-none bg-gray-300 h-0.5 mt-2 mb-2" />

    {awardsList.map((award, index) => (
      <div key={index}>
        <input type="text" name={"awardName" + index} required
          defaultValue={award.name} placeholder={"Award Name" + index}
          className="w-full bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
        >
        </input>

        <textarea name={"description" + index} required
          defaultValue={award.description} placeholder={"Award Description" + index}
          className="mt-2 mb-5 w-full bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
        >
        </textarea>

      </div>
    ))}

    <div className="flex flex-row justify-between">

      <div className="flex group">
        <button type="button" onClick={() => {
          if (awardsList.length === 0) return;
          const awardsListcopy = [...awardsList];
          awardsListcopy.splice(awardsList.length - 1, 1);
          setAwardsList(awardsListcopy);
        }}
          className="w-10 h-10 mr-3 mt-1 border bg-gray-100 flex items-center justify-center rounded-full">
          <MinusIcon />
        </button>
        <p className="hidden group-hover:block text-gray-600">remove one award</p>
      </div>

      <div className="flex group">
        <p className="hidden mr-2 group-hover:block text-gray-600">add one award</p>
        <button type="button" onClick={() => {
          setAwardsList([...awardsList, { name: "", description: "" }])
        }}
          className="w-10 h-10 mr-1 mt-1 border bg-gray-100 flex items-center justify-center rounded-full">
          <PlusIcon />
        </button>
      </div>
    </div>


    {/* =======================experience=========================== */}
  </form>

};

export default Form;
