import dynamic from "next/dynamic";

const Template = dynamic(() => import("./resume"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const View = () => {
  return <>
    <Template></Template>
  </>
}

export default View;
