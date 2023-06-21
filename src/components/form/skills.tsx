import type * as types from '@constants/types';
import { AddButton, RemoveIcon } from '~/components/pages/buttons';
import { formColorTable } from '~/constants/values';

const Skills = ({
  skillsList,
  setSkillsList
}: {
  skillsList: types.skillsListType,
  setSkillsList: (skillList: types.skillsListType) => void
}) => {

  return <>
    <div className="skills">
      <h1 className="text-xl mt-10">Skills</h1>
      <hr className="border-none bg-gray-300 h-0.5 mt-2 mb-2" />

      {skillsList.map((skill, index) => (
        <div
          key={index}
          className={"mt-10 pt-1 pb-2 p-3 rounded-xl " +
            String(formColorTable[(index + 1) % formColorTable.length])}
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
            id={"skillName" + String(index)}
            required
            value={skill.name}
            placeholder={"Skill Name"}
            className="w-full bg-gray-50
         text-gray-900 rounded-lg block p-2.5 outline-0"
            onChange={(e) => {
              const skillsListcopy = [...skillsList];
              skillsListcopy[index]!.name = e.target.value;
              setSkillsList(skillsListcopy);
            }}
          />

          <textarea
            id={"skillList" + String(index)}
            required
            value={skill.skills}
            placeholder={"Skill List"}
            className="mt-2 mb-5 w-full bg-gray-50
         text-gray-900 rounded-lg block p-2.5 outline-0 whitespace-pre-line"
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
  </>
};

export default Skills;