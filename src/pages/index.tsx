import dynamic from "next/dynamic";
import Loading from "../components/loading";
import Form from "../components/pages/form";
import { useRef, useState } from "react";

import type * as types from "~/components/types";
import * as defaults from "~/components/default";

import Copyright from "~/components/copyright";

import { RefreshButton } from "~/components/pages/buttons";


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

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = () => {

    const form = formRef.current;

    setHeader(JSON.parse(form?.dataset.header ? form.dataset.header : "{}") as types.headerType);
    setEducationList(JSON.parse(form?.dataset.educationList ? form.dataset.educationList : "[]") as types.educationListType);
    setSkillsList(JSON.parse(form?.dataset.skillsList ? form.dataset.skillsList : "[]") as types.skillsListType);
    setAwardsList(JSON.parse(form?.dataset.awardsList ? form.dataset.awardsList : "[]") as types.awardsListType);
    setExperienceList(JSON.parse(form?.dataset.experienceList ? form.dataset.experienceList : "[]") as types.experienceListType);
    setProjectList(JSON.parse(form?.dataset.projectsList ? form.dataset.projectsList : "[]") as types.projectsListType);

    // setHeader(JSON.parse(form?.dataset.header ? form.dataset.header : "{}"));
    // setEducationList(JSON.parse(form?.dataset.educationList ? form.dataset.educationList : "[]"));
    // setSkillsList(JSON.parse(form?.dataset.skillsList ? form.dataset.skillsList : "[]"));
    // setAwardsList(JSON.parse(form?.dataset.awardsList ? form.dataset.awardsList : "[]"));
    // setExperienceList(JSON.parse(form?.dataset.experienceList ? form.dataset.experienceList : "[]"));
    // setProjectList(JSON.parse(form?.dataset.projectsList ? form.dataset.projectsList : "[]"));

  };

  const Left = () => (
    <>
      <Form
        func={handleSubmit}
        headerprop={header}
        educationListprop={educationList}
        skillsListprop={skillsList}
        awardsListprop={awardsList}
        experienceListprop={experienceList}
        projectListprop={projectList}
        refObject={formRef}
      />
      <Copyright />
    </>
  );

  const Middle = () => (
    <div className="flex flex-col justify-center items-center place-content-center">
      <RefreshButton handleSubmit={handleSubmit} />
    </div>
  );

  const Right = () => (
    <>
      <PDF
        header={header}
        educationList={educationList}
        skillsList={skillsList}
        awardsList={awardsList}
        experienceList={experienceList}
        projectList={projectList}
      />
    </>
  );


  return <>

    <div className="flex justify-between h-screen">

      <div className="w-1/2 pt-0 p-2 text-center overflow-auto">
        <Left />
      </div>

      <div className="flex flex-col justify-center items-center place-content-center p-3">
        <Middle />
      </div>

      <div className="w-1/2 pt-0">
        <Right />
      </div>

    </div>
  </>
}

export default Index;
