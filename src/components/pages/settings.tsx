import { useState, useEffect } from 'react';
import Cross from "@public/assets/cross.svg";
import type * as types from "@constants/types";
import { fonts, colorTable } from "~/constants";

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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isOpen) {
    return null;
  }

  return <>

    <div className={`fixed inset-0 flex items-center justify-center
                  z-50 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>

      <div className="bg-white rounded-2xl p-4 pb-5 max-w-[90%] min-w-[40%]
                      w-auto mx-4 shadow-2xl text-gray-700 h-[80%]">

        <div className="flex justify-between items-center mb-5">
          <h3 className="text-lg font-semibold">Settings</h3>
          <button
            className="text-gray-500 hover:text-gray-700 mr-1"
            onClick={() => {
              onClose();
            }}
          >
            <Cross />
          </button>
        </div>

        <div className='overflow-y-auto h-[70%] px-5'>

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
              {fonts.map((font) => (
                <option key={font} value={font}>{font}</option>
              ))}
            </select>
          </div>


          <div className="mb-5">
            <label htmlFor="fontsize" className="block mb-2 text-sm font-medium">
              Choose Font Size
            </label>
            <input
              id="fontsize"
              type="number"
              min={1}
              max={72}
              step={1}
              className="bg-gray-50 border border-gray-300 
            text-sm rounded-lg outline-0 block w-full p-2.5"
              value={settingsCopy.fontsize}
              onChange={(e) => {
                const copy = { ...settingsCopy };
                copy.fontsize = parseInt(e.target.value);
                setSettingsCopy(copy);
              }}
            />
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
              {colorTable.map((color) => (
                <option key={color[0]} value={color[0]}>{color[0]}</option>
              ))}
            </select>
          </div>


          <div className="mb-5 flex justify-between text-sm">
            <label className="relative inline-flex items-center mr-5 cursor-pointer">
              <input
                type="checkbox"
                id="boldNumbers"
                className="sr-only peer"
                checked={settingsCopy.boldNumbers}
                onChange={() => setSettingsCopy({ ...settingsCopy, boldNumbers: !settingsCopy.boldNumbers })}
              />
              <div
                className="w-11 h-6 bg-gray-200 rounded-full 
           peer-checked:after:translate-x-full
           peer-checked:after:border-white after:content-[''] after:absolute 
           after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 
           after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
            peer-checked:bg-green-600"></div>
            </label>

            <p className='ml-5'>
              Bold numbers in contributions
            </p>
          </div>


          <div className="flex justify-between items-center mb-5 text-sm">
            <button
              className="rounded-lg bg-red-500 px-2 hover:scale-105"
              onClick={() => { cleanFunction(); }}
            >clear browser cache
            </button>
            <p className='ml-5'>
              Clear the changes we stored in your browser.
            </p>
          </div>

        </div>

        <div className="flex justify-center pt-10">
          <button
            className="bg-green-600 px-2 py-1 rounded-xl hover:scale-105"
            onClick={() => {
              onClose();
              setSettings(settingsCopy);
              storeSettings(settingsCopy);
            }}
          >
            Apply
          </button>
        </div>

      </div>
    </div>
  </>;
};

export default Setting;