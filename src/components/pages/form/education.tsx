import type * as types from "@constants/types";
import { AddButton, RemoveIcon } from "~/components/pages/buttons";
import { formColorTable } from "~/constants";

export const Education = (
  {
    educationList, setEducationList
  }
    :
    {
      educationList: types.educationListType,
      setEducationList: (education: types.educationListType) => void
    }
) => {

  return <>

    <div className="education mt-10">
      <h1 className="text-xl">Education</h1>
      <hr className="border-none bg-gray-300 h-0.5 mt-2 mb-2" />

      {educationList.map((education, index) => (

        <div
          key={index}
          className={"mb-5 mt-10 p-3 pb-5 rounded-xl " +
            String(formColorTable[index % formColorTable.length])}>

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
              id={"school" + String(index)}
              required
              value={education.school}
              placeholder={"School"}
              className="mr-1 w-1/2 bg-gray-50
         text-gray-900 rounded-lg block p-2.5 outline-0"
              onChange={(e) => {
                const educationListcopy = [...educationList];
                educationListcopy[index]!.school = e.target.value;
                setEducationList(educationListcopy);
              }}
            />

            <input
              type="text"
              id={"educationDuration" + String(index)}
              required
              value={education.duration}
              placeholder={"Duration"}
              className="w-1/2 bg-gray-50
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
              id={"degree" + String(index)}
              required
              value={education.degree}
              placeholder={"Degree"}
              className="mr-1 w-1/2 bg-gray-50
         text-gray-900 rounded-lg block p-2.5 outline-0"
              onChange={(e) => {
                const educationListcopy = [...educationList];
                educationListcopy[index]!.degree = e.target.value;
                setEducationList(educationListcopy);
              }}
            />

            <input
              type="text"
              id={"educationLocation" + String(index)}
              required
              value={education.location}
              placeholder={"Location"}
              className="w-1/2 bg-gray-50
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
  </>
}

export default Education;