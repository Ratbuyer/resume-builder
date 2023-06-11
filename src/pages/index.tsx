import dynamic from "next/dynamic";
import Loading from "../components/loading";
import Form from "../components/pages/form";
import { useState } from "react";
import { educationListType } from "~/components/types";

const PDF = dynamic(() => import("../components/resume/resume"), {
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
      school: "School 0", degree: "Degree 0",
      duration: "Sep 2020 - Jun 2024", location: "Location 0"
    },
    {
      school: "School 1", degree: "Degree 1",
      duration: "Sep 2019 - Jun 2023", location: "Location 1"
    },
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

    let n : any = [];

    for (let i = 0; i < Number(form.dataset.educationCount); i++) {
      const school = form.elements.namedItem("school" + i) as HTMLInputElement;
      const duration = form.elements.namedItem("duration" + i) as HTMLInputElement;
      
      n = [...n, { school: school.value }];
    }

    console.log(n);
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
