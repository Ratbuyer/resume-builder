import dynamic from "next/dynamic";
import Loading from "../components/loading";

const PDF = dynamic(() => import("./resume"), {
  loading: () => <Loading />,
  ssr: false,
});

const Index = () => {
  return <>
    <PDF />
  </>
}

export default Index;
