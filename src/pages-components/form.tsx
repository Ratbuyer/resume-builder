import { useState } from "react";

type submitFunc = (e: React.FormEvent<HTMLFormElement>) => void;

const plusButton = () => (
  <button type="button" onClick={() => { }}
    className="w-10 h-10 mt-2 border bg-gray-100 flex items-center justify-center rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-600">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6"></path>
    </svg>
  </button>
)

const minusButton = () => (
  <button type="button" onClick={() => { }}
    className="w-10 h-10 mt-2 border bg-gray-100 flex items-center justify-center rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-600">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6"></path>
    </svg>
  </button>
)

const Form = ({ func }: { func: submitFunc }) => {

  const [education, setEducation] = useState([]);

  return <form onSubmit={func} data-education-count={3}>



    <div className="fixed top-1/2 left-1/2">
      <button type="submit" onClick={() => { }}
        className="w-10 h-10 mt-2 border bg-gray-100 flex items-center justify-center rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-600">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path>
        </svg>
      </button>
    </div>



    <h1 className="text-xl">Basic Information</h1>
    <hr className="border-none bg-gray-300 h-0.5 mt-2" />

    <div className="mb-2 mt-2">
      <input type="text" id="name" name="name"
        defaultValue="Name" placeholder="Name"
        className="w-full bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
      >
      </input>
    </div>

    <div className="flex flex-row justify justify-between mb-2">
      <input type="text" id="phone" name="phone"
        defaultValue="+1 111-111-1111" placeholder="Phone"
        className="mr-1 w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
      >
      </input>

      <input type="text" id="email" name="email"
        defaultValue="Example@gmail.com" placeholder="Email"
        className="w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
      >
      </input>
    </div>

    <div className="flex flex-row justify justify-between mb-2">
      <input type="text" id="github" name="github"
        defaultValue="https://github.com/" placeholder="github link"
        className="mr-1 w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
      >
      </input>

      <input type="text" id="linkedin" name="linkedin"
        defaultValue="https://www.linkedin.com/feed/" placeholder="linkedin link"
        className="w-1/2 bg-gray-50 border border-gray-300
         text-gray-900 rounded-lg block p-2.5 outline-0"
      >
      </input>
    </div>

    <h1 className="text-xl">Education</h1>
    <hr className="border-none bg-gray-300 h-0.5 mt-2" />


  </form>

};

export default Form;