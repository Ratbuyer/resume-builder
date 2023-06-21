import type * as types from "@constants/types";
import { AddButton, RemoveIcon, RemoveButton } from "~/components/pages/buttons";
import { formColorTable } from "~/constants/values";

export const Experience = ({
  experienceList,
  setExperienceList,
}: {
  experienceList: types.experienceListType,
  setExperienceList: (experience: types.experienceListType) => void,
}) => {

  const addExperienceContribution = (i: number) => {
    const experienceListcopy = [...experienceList];
    experienceListcopy[i]?.contributions.push("");
    setExperienceList(experienceListcopy);
  };

  const removeExperienceContribution = (i: number, j: number) => {
    const experienceListcopy = [...experienceList];
    experienceListcopy[i]?.contributions.splice(j, 1);
    setExperienceList(experienceListcopy);
  };

  const setExperienceContribution = (i: number, j: number, value: string) => {
    const experienceListcopy = [...experienceList];
    experienceListcopy[i]!.contributions[j] = value;
    setExperienceList(experienceListcopy);
  };

  return <>
    <div className="experience">
      <h1 className="text-xl mt-10">Experience</h1>
      <hr className="border-none bg-gray-300 h-0.5 mt-2 mb-2" />

      {experienceList.map((experience, index0) => (

        <div
          key={index0}
          className={"p-3 mt-10 rounded-xl " +
            String(formColorTable[(index0 + 2) % formColorTable.length])}
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
              id={"company" + String(index0)}
              required
              value={experience.company}
              placeholder={"Company"}
              className="mr-1 w-1/2 bg-gray-50
         text-gray-900 rounded-lg block p-2.5 outline-0"
              onChange={(e) => {
                const experienceListcopy = [...experienceList];
                experienceListcopy[index0]!.company = e.target.value;
                setExperienceList(experienceListcopy);
              }}
            />

            <input
              type="text"
              id={"experienceDuration" + String(index0)}
              required
              value={experience.duration}
              placeholder={"Duration"}
              className="w-1/2 bg-gray-50
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
              id={"title" + String(index0)}
              required
              value={experience.title}
              placeholder={"Title"}
              className="mr-1 w-1/2 bg-gray-50
         text-gray-900 rounded-lg block p-2.5 outline-0"
              onChange={(e) => {
                const experienceListcopy = [...experienceList];
                experienceListcopy[index0]!.title = e.target.value;
                setExperienceList(experienceListcopy);
              }}
            />

            <input
              type="text"
              id={"experienceLocation" + String(index0)}
              required
              defaultValue={experience.location}
              placeholder={"Location"}
              className="w-1/2 bg-gray-50
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
                id={"experience" + String(index0) + "contribution" + String(index1)}
                placeholder={"Contribution " + String(index1)}
                className="w-full mb-2 bg-gray-50
              text-gray-900 rounded-lg block p-2.5 outline-0"
                onChange={(e) => {
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
  </>

};

export default Experience;