import dynamic from "next/dynamic";

const PDF = dynamic(() => import("./resume"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const Index = () => {
  return <>
    <PDF />
  </>
}

export default Index;
