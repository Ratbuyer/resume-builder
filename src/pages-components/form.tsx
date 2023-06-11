import { useState } from "react";

import Refresh from "../../public/refresh.svg";

type submitFunc = (e: React.FormEvent<HTMLFormElement>) => void;

type HeaderType = {
  name: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
};

type EducationListType = {
  school: string;
  degree: string;
  duration: string;
  location: string;
}[];

const plusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-600">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6"></path>
  </svg>
)

const minusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-600">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6"></path>
  </svg>
)

const Form = (
  { func,
    header,
    educationListprop }:
    {
      func: submitFunc,
      header: HeaderType,
      educationListprop: EducationListType
    }) => {

  const [educationList, setEducationList] = useState(educationListprop);



  return <form onSubmit={func} data-education-count={educationList.length}>


    <div className="fixed top-1/2 left-1/2">
      <button type="submit"
        className="w-10 h-10 mt-2 bg-gray-100 flex items-center justify-center rounded-full">
        <Refresh />
      </button>
    </div>


    <h1 className="text-xl">Basic Information</h1>
    <hr className="border-none bg-gray-300 h-0.5 mt-2" />

    <div className="mb-2 mt-2">
      <input type="text" id="name" name="name"
        defaultValue={header.name} placeholder="Name"
        className="w-full bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
      >
      </input>
    </div>

    <div className="flex flex-row justify justify-between mb-2">
      <input type="text" id="phone" name="phone"
        defaultValue={header.phone} placeholder="Phone"
        className="mr-1 w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
      >
      </input>

      <input type="text" id="email" name="email"
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

    <h1 className="text-xl">Education</h1>
    <hr className="border-none bg-gray-300 h-0.5 mt-2 mb-2" />


    {educationList.map((education, index) => (

      <div key={index} className="mb-2">

        <div className="flex flex-row justify justify-between mb-2">

          <button type="button" onClick={() => { }}
            className="w-10 h-10 mr-1 mt-1 border bg-gray-100 flex items-center justify-center rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-600">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6"></path>
            </svg>
          </button>

          <input type="text" name={"school" + index}
            defaultValue={educationListprop[index]?.school} placeholder={"School" + index}
            className="mr-1 w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
          >
          </input>

          <input type="text" name={"duration" + index}
            defaultValue={educationListprop[index]?.duration} placeholder={"Duration1" + index}
            className="w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
          >
          </input>
        </div>

      </div>
    ))}

  </form>

};

export default Form;