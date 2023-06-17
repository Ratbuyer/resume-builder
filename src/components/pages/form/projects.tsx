import type * as types from "@constants/types";
import { AddButton, RemoveButton, RemoveIcon } from "@components/pages/form/buttons";
import { formColorTable } from "~/constants/constants";

const Projects = (
  { projectList,
    setProjectList,
    removeProjectContribution,
    addProjectContribution,
    setProjectContribution,
  }:
    {
      projectList: types.projectsListType,
      setProjectList: (projectList: types.projectsListType) => void,
      removeProjectContribution: (i: number, j: number) => void,
      addProjectContribution: (i: number) => void,
      setProjectContribution: (i: number, j: number, value: string) => void,
    }
) => {
  return <>
    <div className="projects">
      <h1 className="text-xl mt-10">Projects</h1>
      <hr className="border-none bg-gray-300 h-0.5 mt-2 mb-2" />

      {projectList.map((project, index0) => (
        <div
          key={index0}
          className={"p-3 mt-10 rounded-xl " +
            String(formColorTable[(index0 + 3) % formColorTable.length])}
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
  </>
};

export default Projects;