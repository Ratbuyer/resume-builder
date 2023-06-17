import Refresh from "@public/assets/refresh.svg";
import { PlusIcon, MinusIcon } from "./icons";
import Setting from "@public/assets/setting.svg";

export const RefreshButton = ({ handleSubmit }: { handleSubmit: () => void }) => (
  <button
    onClick={handleSubmit}
    className="w-10 h-10 mt-2 hover:scale-110 
        flex items-center justify-center rounded-full"
  >
    <Refresh />
  </button>
);

export const SettingButton = ({ func }: { func: () => void }) => (
  <button
    onClick={func}
    className="w-10 h-10 mt-2 hover:scale-110 text-gray-100 
        flex items-center justify-center rounded-full"
  >
    <Setting />
  </button>
);


export const AddButton = ({ func }: { func: React.MouseEventHandler<HTMLButtonElement> }) => (
  <button
    type="button"
    onClick={func}
    className="w-10 h-10 mt-1 border bg-gray-100 
      flex items-center justify-center rounded-full"
  >
    <PlusIcon />
  </button>
);


export const RemoveButton = ({ func }: { func: React.MouseEventHandler<HTMLButtonElement> }) => (

  <div className="group flex">
    <button
      type="button"
      onClick={func}
      className="w-10 h-10 mr-3 mt-1 border bg-gray-100 
      flex items-center justify-center rounded-full"
    >
      <MinusIcon />
    </button>
  </div>
);


export const RemoveIcon = ({ func }: { func: React.MouseEventHandler<HTMLButtonElement> }) => (

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