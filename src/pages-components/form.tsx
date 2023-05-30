import { useState } from "react";


const Input = ({ label }: { label: string }) => (
  <div className="mb-2">
    <input type="text" id="first_name"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={label}>
    </input>
  </div>
)

const Form = () => {

  const [contact, setContact] = useState(0);

  return <div>


    <Input label="Name" />
    <Input label="Email" />
    <Input label="Phone" />

    <button className="w-10 h-10 mt-2 bg-gray-100 flex items-center justify-center rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-600">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
      </svg>
    </button>


  </div>

};

export default Form;