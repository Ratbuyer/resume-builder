import dynamic from "next/dynamic";
import Loading from "../components/loading";

const PDF = dynamic(() => import("./resume"), {
  loading: () => <Loading />,
  ssr: false,
});

const Index = () => {
  return <>
    <div className="flex h-screen">
      <div className="flex-1 p-4 text-center">
        <p className="mt-20 text-2xl">User input area</p>
      </div>
      <div className="flex-1 p-4">
        <PDF />
      </div>
    </div>
  </>
}

export default Index;
