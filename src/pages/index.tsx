import dynamic from "next/dynamic";
import Loading from "../resume-components/loading";
import Form from "../pages-components/form";

const PDF = dynamic(() => import("../resume-components/resume"), {
  loading: () => <Loading />,
  ssr: false,
});

const Index = () => {
  return <>
    <div className="flex h-screen">

      <div className="flex-1 p-4 text-center" /* Left */>
        <Form />
      </div>

      <div className="flex-1 p-4" /* Right */>
        <PDF />
      </div>

    </div>
  </>
}

export default Index;
