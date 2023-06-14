import Refresh from "../../../public/refresh.svg";
import { PlusIcon } from "./icons";
import { MinusIcon } from "./icons";


export const RefreshButton = (

  { handleSubmit }: {
    handleSubmit: () => void,
  }) => (

  <div className="group z-0 relative flex">

    <button
      onClick={handleSubmit}
      className="w-10 h-10 mt-2 bg-gray-100 hover:scale-110 
        flex items-center justify-center rounded-full"
    >

      <Refresh />

    </button>
    <p
      className="absolute right-3 z-10 transform -translate-x-1/2 hidden group-hover:block"
    >
      reload
    </p>
  </div>
);


export const AddButton = ({ func, text }:
  {
    func: React.MouseEventHandler<HTMLButtonElement>,
    text: string,
  }) => (

  <div className="group flex relative">

    <button
      type="button"
      onClick={func}
      className="w-10 h-10 mt-1 border bg-gray-100 
      flex items-center justify-center rounded-full"
    >

      <PlusIcon />

    </button>

    <p className="absolute right-3 transform -translate-x-1/2 hidden group-hover:block text-gray-600">{text}</p>

  </div>
);


export const RemoveButton = ({ func, text }:
  {
    func: React.MouseEventHandler<HTMLButtonElement>,
    text: string,
  }) => (

  <div className="group flex">

    <button
      type="button"
      onClick={func}
      className="w-10 h-10 mr-3 mt-1 border bg-gray-100 
      flex items-center justify-center rounded-full"
    >

      <MinusIcon />

    </button>

    <p className="hidden group-hover:block text-gray-600">{text}</p>

  </div>
);

export const RemoveIcon = ({ func }:
  {
    func: React.MouseEventHandler<HTMLButtonElement>,
  }) => (

  <div className="group flex z-10 mb-1">

    <button
      type="button"
      onClick={func}
      className=""
    >

      <MinusIcon />

    </button>

  </div>
);