import Refresh from "../../../public/refresh.svg";
import { PlusIcon } from "./icons";
import { MinusIcon } from "./icons";

export const RefreshButton = () => (
  <div className="fixed top-1/2 left-1/2 group flex">
    <button type="submit"
      className="w-10 h-10 mt-2 bg-gray-100 hover:scale-110 
        flex items-center justify-center rounded-full">
      <Refresh />
    </button>
    <p className="hidden group-hover:block ml-2 text-gray-600">reload pdf</p>
  </div>
);

export const AddButton = ({ func, text }:
  {
    func: React.MouseEventHandler<HTMLButtonElement>,
    text: string
  }) => (
  <div className="group flex">
    <p className="hidden group-hover:block text-gray-600">{text}</p>
    <button type="button" onClick={func}
      className="w-10 h-10 ml-3 mt-1 border
           bg-gray-100 flex items-center justify-center rounded-full">
      <PlusIcon />
    </button>
  </div>
);

export const RemoveButton = ({ func, text }:
  {
    func: React.MouseEventHandler<HTMLButtonElement>,
    text: string
  }) => (
  <div className="group flex">
    <button type="button" onClick={func}
      className="w-10 h-10 mr-3 mt-1 border
           bg-gray-100 flex items-center justify-center rounded-full">
      <MinusIcon />
    </button>
    <p className="hidden group-hover:block text-gray-600">{text}</p>
  </div>
);

