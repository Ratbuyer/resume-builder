import dynamic from "next/dynamic";
import Loading from "../components/loading";
import Form from "../components/pages/form";
import { useState } from "react";
import { educationListType } from "~/components/types";

import * as type from "~/components/types";
import * as defaults from "~/components/default";

import Copyright from "~/components/copyright";


const PDF = dynamic(() => import("../components/resume/resume"), {
  loading: () => <Loading />,
  ssr: false,
});


const Index = () => {

  const [header, setHeader] = useState<type.headerType>(defaults.header);
  const [educationList, setEducationList] = useState<type.educationListType>(defaults.educationList);
  const [skillsList, setSkillsList] = useState<type.skillsListType>(defaults.skillsList);
  const [awardsList, setAwardsList] = useState<type.awardsListType>(defaults.awardsList);
  const [experienceList, setExperienceList] = useState<type.experienceListType>(defaults.experienceList);
  const [projectList, setProjectList] = useState<type.projectsListType>(defaults.projectList);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const name = form.elements.namedItem("name") as HTMLInputElement;
    const phone = form.elements.namedItem("phone") as HTMLInputElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const github = form.elements.namedItem("github") as HTMLInputElement;
    const linkedin = form.elements.namedItem("linkedin") as HTMLInputElement;
    setHeader({
      name: name.value,
      phone: phone.value,
      email: email.value,
      github: github.value,
      linkedin: linkedin.value
    });

    let educationCopy: educationListType = [];
    for (let i = 0; i < Number(form.dataset.educationCount); i++) {
      const school = form.elements.namedItem("school" + i) as HTMLInputElement;
      const duration = form.elements.namedItem("educationDuration" + i) as HTMLInputElement;
      const degree = form.elements.namedItem("degree" + i) as HTMLInputElement;
      const location = form.elements.namedItem("educationLocation" + i) as HTMLInputElement;
      educationCopy = [...educationCopy, { school: school.value, duration: duration.value, degree: degree.value, location: location.value }];
    }
    setEducationList(educationCopy);

    let skillsCopy: type.skillsListType = [];
    for (let i = 0; i < Number(form.dataset.skillsCount); i++) {
      const name = form.elements.namedItem("skillName" + i) as HTMLInputElement;
      const skills = form.elements.namedItem("skillList" + i) as HTMLInputElement;
      skillsCopy = [...skillsCopy, { name: name.value, skills: skills.value }];
    }
    setSkillsList(skillsCopy);

    let awardsCopy: type.awardsListType = [];
    for (let i = 0; i < Number(form.dataset.awardsCount); i++) {
      const award = form.elements.namedItem("award" + i) as HTMLInputElement;
      awardsCopy = [...awardsCopy, award.value];
    }
    setAwardsList(awardsCopy);


    let experienceCopy: type.experienceListType = [];

    for (let i = 0; i < Number(form.dataset.experienceCount); i++) {

      const company = form.elements.namedItem("company" + i) as HTMLInputElement;
      const title = form.elements.namedItem("title" + i) as HTMLInputElement;
      const duration = form.elements.namedItem("experienceDuration" + i) as HTMLInputElement;
      const location = form.elements.namedItem("experienceLocation" + i) as HTMLInputElement;

      let contributionsCopy: string[] = [];
      for (let j = 0; j < Number(form.dataset.experienceContributionsList?.[i * 2]); j++) {
        const contribution = form.elements.
          namedItem("experience" + i + "contribution" + j) as HTMLInputElement;
        contributionsCopy = [...contributionsCopy, contribution.value];
      }

      experienceCopy = [...experienceCopy, {
        company: company.value,
        title: title.value,
        duration: duration.value,
        location: location.value,
        contributions: contributionsCopy
      }];
    }

    setExperienceList(experienceCopy);


    let projectCopy: type.projectsListType = [];

    for (let i = 0; i < Number(form.dataset.projectsCount); i++) {

      const name = form.elements.namedItem("project" + i) as HTMLInputElement;
      const description = form.elements.namedItem("projectDescription" + i) as HTMLInputElement;
      const link = form.elements.namedItem("link" + i) as HTMLInputElement;

      let contributionsCopy: string[] = [];
      for (let j = 0; j < Number(form.dataset.projectContributionsList?.[i * 2]); j++) {
        const contribution = form.elements.
          namedItem("project" + i + "contribution" + j) as HTMLInputElement;
        contributionsCopy = [...contributionsCopy, contribution.value];
      }

      projectCopy = [...projectCopy, {
        name: name.value,
        description: description.value,
        link: link.value,
        contributions: contributionsCopy
      }];
    }

    setProjectList(projectCopy);

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
