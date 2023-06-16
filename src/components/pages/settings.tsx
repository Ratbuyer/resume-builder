import { useState, useEffect } from 'react';
import Cross from "@public/cross.svg";
import Notification from "@components/pages/notification";
import type * as types from "@constants/types";
import { FONTS, COLORTABLE } from "@constants/constants";

const Setting = ({
  isOpen,
  onClose,
  cleanFunction,
  setSettings,
  settings,
  storeSettings,
}
  :
  {
    isOpen: boolean,
    onClose: () => void,
    cleanFunction: () => void,
    setSettings: (settings: types.settingsType) => void,
    settings: types.settingsType,
    storeSettings: (settings: types.settingsType) => void,
  }) => {

  const [settingsCopy, setSettingsCopy] = useState<types.settingsType>(settings);
  const [isMounted, setIsMounted] = useState(false);
  const [messsage, setMessage] = useState<string>("");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isOpen) {
    return null;
  }

  return <>

    {messsage && <Notification func={() => { setMessage("") }} message={messsage} />}

    <div className={`fixed inset-0 flex items-center justify-center 
                  z-50 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>

      <div className="bg-white rounded-lg p-4 pb-5 max-w-[50%] 
                      w-full mx-4 shadow-2xl text-gray-700">

        <div className="flex justify-between items-center mb-10">
          <h3 className="text-lg font-semibold">Settings</h3>
          <button
            className="text-gray-500 hover:text-gray-700 mr-1"
            onClick={() => {
              onClose();
              setSettings(settingsCopy);
              storeSettings(settingsCopy);
            }}
          >
            <Cross />
          </button>
        </div>

        <div className="flex justify-between items-center mb-5 text-sm">
          <button
            className="rounded-lg bg-red-500 px-2 hover:scale-105"
            onClick={() => { cleanFunction(); setMessage("cache cleared"); }}
          >clear browser cache
          </button>
          <p>
            <span className="text-red-500">! </span>
            This will clear the inputs we stored in your browser.
          </p>
        </div>

        <div className="mb-5">
          <label
            htmlFor="fonts"
            className="block mb-2 text-sm font-medium">
            Choose Font
          </label>
          <select
            id="fonts"
            className="bg-gray-50 border border-gray-300 text-sm 
            rounded-lg outline-0 block w-full p-2.5"
            value={settingsCopy.font}
            onChange={(e) => {
              const copy = { ...settingsCopy };
              copy.font = e.target.value
              setSettingsCopy(copy)
            }}
          >
            {FONTS.map((font) => (
              <option key={font} value={font}>{font}</option>
            ))}
          </select>
        </div>

        <div className="mb-5">
          <label
            htmlFor="colors"
            className="block mb-2 text-sm font-medium">
            Choose Color
          </label>
          <select
            id="colors"
            className="bg-gray-50 border border-gray-300 text-sm 
            rounded-lg outline-0 block w-full p-2.5"
            value={settingsCopy.color}
            onChange={(e) => {
              const copy = { ...settingsCopy };
              copy.color = e.target.value
              setSettingsCopy(copy)
            }}
          >
            {COLORTABLE.map((color) => (
              <option key={color[0]} value={color[0]}>{color[0]}</option>
            ))}
          </select>
        </div>

      </div>
    </div>
  </>;
};

export default Setting;