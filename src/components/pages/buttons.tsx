import Refresh from "@public/assets/refresh.svg";
import Setting from "@public/assets/setting.svg";

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-600">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6"></path>
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-600">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
  </svg>
);


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
    className="w-10 h-10 mt-1 bg-gray-100 
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
      className="w-10 h-10 mr-3 mt-1 bg-gray-100 
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
    >
      <MinusIcon />
    </button>
  </div>
);