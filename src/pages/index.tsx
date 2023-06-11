import dynamic from "next/dynamic";
import Loading from "../resume-components/loading";
import Form from "../pages-components/form";
import { useState } from "react";

// !important : Do not use other ways to import resume
const PDF = dynamic(() => import("../resume-components/resume"), {
  loading: () => <Loading />,
  ssr: false,
});


const Index = () => {

  const [header, setHeader] = useState({
    name: "Name",
    phone: "+1 111-111-1111",
    email: "Example@gmail.com",
    github: "github.com",
    linkedin: "linkedin.com",
  });

  const [educationList, setEducationList] = useState([
    {
      school: "School 1", degree: "Degree 1",
      duration: "Sep 2020 - Jun 2024", location: "Toronto, ON"
    },
    {
      school: "School 2", degree: "Degree 2",
      duration: "Sep 2019 - Jun 2023", location: "London, ON"
    },
  ]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const name = e.currentTarget.elements.namedItem("name") as HTMLInputElement;
    const phone = e.currentTarget.elements.namedItem("phone") as HTMLInputElement;
    const email = e.currentTarget.elements.namedItem("email") as HTMLInputElement;
    const github = e.currentTarget.elements.namedItem("github") as HTMLInputElement;
    const linkedin = e.currentTarget.elements.namedItem("linkedin") as HTMLInputElement;
    setHeader({
      name: name.value,
      phone: phone.value,
      email: email.value,
      github: github.value,
      linkedin: linkedin.value
    });

    console.log(form.dataset.educationCount);
  };

  return <>
    <div className="flex h-screen">

      <div className="flex-1 p-3 text-center overflow-auto">
        <Form
          func={handleSubmit}
          header={header} 
          educationListprop={educationList}
          />
      </div>

      <div className="flex-1 p-3 ml-2">
        <PDF header={header} />
      </div>

    </div>
  </>
}

export default Index;
