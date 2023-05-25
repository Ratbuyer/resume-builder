import dynamic from "next/dynamic";
import { useState } from "react";

const Template = dynamic(() => import("./test"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const View = () => {

  const [name, setName] = useState("");
  
  return <>
  <button onClick={() => {setName(name + "1")}}>Click me</button>
    <Template name={name}/>
  </>
}

export default View;