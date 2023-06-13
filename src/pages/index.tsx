import dynamic from "next/dynamic";
import Loading from "../components/loading";
import Form from "../components/pages/form";
import { useState } from "react";
import { educationListType } from "~/components/types";

import * as type from "~/components/types";
import * as defaults from "~/components/default";


const PDF = dynamic(() => import("../components/resume/resume"), {
  loading: () => <Loading />,
  ssr: false,
});


const Index = () => {

  const [header, setHeader] = useState<type.headerType>(defaults.header);
  const [educationList, setEducationList] = useState<type.educationListType>(defaults.educationList);
  const [skillsList, setSkillsList] = useState<type.skillsListType>(defaults.skillsList);
  const [awardsList, setAwardsList] = useState<type.awardsListType>(defaults.awardsList);

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
      const duration = form.elements.namedItem("duration" + i) as HTMLInputElement;
      const degree = form.elements.namedItem("degree" + i) as HTMLInputElement;
      const location = form.elements.namedItem("location" + i) as HTMLInputElement;
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
  };

  return <>

    <div className="flex h-screen">

      <div className="flex-1 p-3 text-center overflow-auto">
        <Form
          func={handleSubmit}
          header={header}
          educationListprop={educationList}
          skillsListprop={skillsList}
          awardsListprop={awardsList}
        />
      </div>

      <div className="flex-1 p-3 ml-2">
        <PDF
          header={header}
          educationList={educationList} 
          skillsList={skillsList}
          awardsList={awardsList}
          />
      </div>

    </div>
  </>
}

export default Index;
