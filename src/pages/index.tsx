import dynamic from "next/dynamic";
import Loading from "../components/pages/loading";
import Form from "../components/form";
import { useEffect, useRef, useState } from "react";
import type * as types from "@constants/types";
import * as defaults from "~/constants/defaults";
import Copyright from "@components/pages/copyright";
import { RefreshButton, SettingButton } from "~/components/pages/buttons";
import Settings from "~/components/settings";
import { setLocalStorage } from "~/utils";

const PDF = dynamic(() => import("../components/resume/resume"), {
  loading: () => <Loading />,
  ssr: false,
});


const Index = () => {

  const [loading, setLoading] = useState<boolean>(true);
  const [settings, setSettings] = useState<types.settingsType>(defaults.settings);

  const [header, setHeader] = useState<types.headerType>(defaults.header);
  const [educationList, setEducationList] = useState<types.educationListType>(defaults.educationList);
  const [skillsList, setSkillsList] = useState<types.skillsListType>(defaults.skillsList);
  const [awardsList, setAwardsList] = useState<types.awardsListType>(defaults.awardsList);
  const [experienceList, setExperienceList] = useState<types.experienceListType>(defaults.experienceList);
  const [projectList, setProjectList] = useState<types.projectsListType>(defaults.projectList);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = () => {

    const form = formRef.current;

    if (!form?.checkValidity()) {
      form?.reportValidity()
      return;
    }

    const headerCopy = JSON.parse(form?.dataset.header ? form.dataset.header : "{}") as types.headerType
    const educationListCopy = JSON.parse(form?.dataset.educationList ? form.dataset.educationList : "[]") as types.educationListType
    const skillsListCopy = JSON.parse(form?.dataset.skillsList ? form.dataset.skillsList : "[]") as types.skillsListType
    const awardsListCopy = JSON.parse(form?.dataset.awardsList ? form.dataset.awardsList : "[]") as types.awardsListType
    const experienceListCopy = JSON.parse(form?.dataset.experienceList ? form.dataset.experienceList : "[]") as types.experienceListType
    const projectListCopy = JSON.parse(form?.dataset.projectsList ? form.dataset.projectsList : "[]") as types.projectsListType

    setHeader(headerCopy);
    setEducationList(educationListCopy);
    setSkillsList(skillsListCopy);
    setAwardsList(awardsListCopy);
    setExperienceList(experienceListCopy);
    setProjectList(projectListCopy);

    setLocalStorage("header", JSON.stringify(headerCopy));
    setLocalStorage("educationList", JSON.stringify(educationListCopy));
    setLocalStorage("skillsList", JSON.stringify(skillsListCopy));
    setLocalStorage("awardsList", JSON.stringify(awardsListCopy));
    setLocalStorage("experienceList", JSON.stringify(experienceListCopy));
    setLocalStorage("projectList", JSON.stringify(projectListCopy));

    // localStorage.setItem("header", JSON.stringify(headerCopy));
    // localStorage.setItem("educationList", JSON.stringify(educationListCopy));
    // localStorage.setItem("skillsList", JSON.stringify(skillsListCopy));
    // localStorage.setItem("awardsList", JSON.stringify(awardsListCopy));
    // localStorage.setItem("experienceList", JSON.stringify(experienceListCopy));
    // localStorage.setItem("projectList", JSON.stringify(projectListCopy));
  };

  useEffect(() => {

    const settings = localStorage.getItem("settings");
    const header = localStorage.getItem("header");
    const educationList = localStorage.getItem("educationList");
    const skillsList = localStorage.getItem("skillsList");
    const awardsList = localStorage.getItem("awardsList");
    const experienceList = localStorage.getItem("experienceList");
    const projectList = localStorage.getItem("projectList");

    header && setHeader(JSON.parse(header) as types.headerType);
    educationList && setEducationList(JSON.parse(educationList) as types.educationListType);
    skillsList && setSkillsList(JSON.parse(skillsList) as types.skillsListType);
    awardsList && setAwardsList(JSON.parse(awardsList) as types.awardsListType);
    experienceList && setExperienceList(JSON.parse(experienceList) as types.experienceListType);
    projectList && setProjectList(JSON.parse(projectList) as types.projectsListType);
    settings && setSettings(JSON.parse(settings) as types.settingsType);

    setLoading(false);
  }, []);

  const Left = () => {
    if (loading) return <Loading />;
    return <>
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
  };

  const Middle = () => {

    const [showSetting, setShowSetting] = useState(false);

    return <>

      <div className="flex flex-col justify-center items-center 
          place-content-center gap-y-10">
        <RefreshButton handleSubmit={handleSubmit} />
        <SettingButton func={() => { setShowSetting(true) }} />
      </div>

      {showSetting && <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-10"></div>}

      <Settings
        isOpen={showSetting}
        onClose={() => { setShowSetting(false) }}
        settings={settings}
        setSettings={setSettings}
      />
    </>
  };

  const Right = () => (
    <PDF
      header={header}
      educationList={educationList}
      skillsList={skillsList}
      awardsList={awardsList}
      experienceList={experienceList}
      projectList={projectList}
      settings={settings}
    />
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
};

export default Index;