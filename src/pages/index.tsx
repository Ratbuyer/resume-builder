import dynamic from "next/dynamic";
import Loading from "../components/loading";
import Form from "../components/pages/form";
import { useState } from "react";

import * as types from "~/components/types";
import * as defaults from "~/components/default";

import Copyright from "~/components/copyright";


const PDF = dynamic(() => import("../components/resume/resume"), {
  loading: () => <Loading />,
  ssr: false,
});


const Index = () => {

  const [header, setHeader] = useState<types.headerType>(defaults.header);
  const [educationList, setEducationList] = useState<types.educationListType>(defaults.educationList);
  const [skillsList, setSkillsList] = useState<types.skillsListType>(defaults.skillsList);
  const [awardsList, setAwardsList] = useState<types.awardsListType>(defaults.awardsList);
  const [experienceList, setExperienceList] = useState<types.experienceListType>(defaults.experienceList);
  const [projectList, setProjectList] = useState<types.projectsListType>(defaults.projectList);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const form = e.target as HTMLFormElement;

    setHeader(JSON.parse(form.dataset.header ? form.dataset.header : "{}"));
    setEducationList(JSON.parse(form.dataset.educationList ? form.dataset.educationList : "[]"));
    setSkillsList(JSON.parse(form.dataset.skillsList ? form.dataset.skillsList : "[]"));
    setAwardsList(JSON.parse(form.dataset.awardsList ? form.dataset.awardsList : "[]"));
    setExperienceList(JSON.parse(form.dataset.experienceList ? form.dataset.experienceList : "[]"));
    setProjectList(JSON.parse(form.dataset.projectsList ? form.dataset.projectsList : "[]"));

  };

  return <>

    <div className="flex h-screen">

      <div className="flex-1 pt-0 p-2 text-center overflow-auto">

        <nav className="bg-gray-100 sticky top-0 flex flex-row items-center p-3">
          <h1
            className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-gray-800 to-gray-200"
          >
            Resume Builder
          </h1>
        </nav>

        <Form
          func={handleSubmit}
          headerprop={header}
          educationListprop={educationList}
          skillsListprop={skillsList}
          awardsListprop={awardsList}
          experienceListprop={experienceList}
          projectListprop={projectList}
        />

        <Copyright />
      </div>

      <div className="flex-1 pt-0 pb-0 p-2 ml-2">
        <PDF
          header={header}
          educationList={educationList}
          skillsList={skillsList}
          awardsList={awardsList}
          experienceList={experienceList}
          projectList={projectList}
        />
      </div>

    </div>
  </>
}

export default Index;
