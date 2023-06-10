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
    phone: "Phone",
    email: "Email",
    github: "",
    linkedin: "",
  });

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

      <div className="flex-1 p-3 overflow-auto">
        <Form func={handleSubmit} />
      </div>

      <div className="flex-1 p-3 ml-2">
        <PDF header={header} />
      </div>

    </div>
  </>
}

export default Index;
