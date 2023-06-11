import dynamic from "next/dynamic";
import Loading from "../components/loading";
import Form from "../components/pages/form";
import { useState } from "react";
import { educationListType } from "~/components/types";

import * as type from "~/components/types";

const PDF = dynamic(() => import("../components/resume/resume"), {
  loading: () => <Loading />,
  ssr: false,
});


const Index = () => {

  const [header, setHeader] = useState<type.headerType>({
    name: "Name",
    phone: "+1 111-111-1111",
    email: "Example@gmail.com",
    github: "github.com",
    linkedin: "linkedin.com",
  });

  const [educationList, setEducationList] = useState<type.educationListType>([
    {
      school: "University of Example 0", degree: "Bachelor of Science",
      duration: "Sep 2020 - Jun 2024", location: "Location 0"
    },
    {
      school: "University of Example 1", degree: "Master of Aplied Science",
      duration: "Sep 2019 - Jun 2023", location: "Location 1"
    },
  ]);

  const [skillsList, setSkillsList] = useState<type.skillsListType>([
    { name: "Languages", skills: "C, C++, Python, Java, JavaScript, TypeScript" },
    { name: "Frameworks", skills: "React, Next.js, Node.js, Express.js, Tailwind CSS, Bootstrap" },
  ]);

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

    console.log(form.dataset.skillsCount);

    for (let i = 0; i < Number(form.dataset.skillsCount); i++) {
      const name = form.elements.namedItem("skillName" + i) as HTMLInputElement;
      console.log("hi");
      const skills = form.elements.namedItem("skillList" + i) as HTMLInputElement;
      skillsCopy = [...skillsCopy, { name: name.value, skills: skills.value }];
    }
    setSkillsList(skillsCopy);

  };

  return <>
    <div className="flex h-screen">

      <div className="flex-1 p-3 text-center overflow-auto">
        <Form
          func={handleSubmit}
          header={header}
          educationListprop={educationList}
          skillsListprop={skillsList}
        />
      </div>

      <div className="flex-1 p-3 ml-2">
        <PDF
          header={header}
          educationList={educationList} 
          skillsList={skillsList}
          />
      </div>

    </div>
  </>
}

export default Index;
