import { useEffect, useState } from 'react';
import Cross from "@public/assets/cross.svg";
import type * as types from "@constants/types";
import FontSelector from './fontSelector';
import ColorSelector from './colorSelector';
import FontSizeSelector from './fontSizeSelector';
import BoldNumberToggle from './boldNumberToggle';
import ClearCacheButton from './clearCacheButton';
import RestoreSettingsButton from './restoreSettingsButton';
import { setLocalStorage } from '~/utils';
import { settings as defaultSettings } from "@constants/defaults";


const Setting = ({
  isOpen,
  settings,
  onClose,
  setSettings,
}: {
  isOpen: boolean,
  settings: types.settingsType,
  onClose: () => void,
  setSettings: (settings: types.settingsType) => void,
}) => {

  const [settingsCopy, setSettingsCopy] = useState<types.settingsType>(settings);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("");
    }, 1500);

    return () => {
      clearTimeout(timer);
    };

  }, [message]);

  if (!isOpen) {
    return null;
  }

  return <>

    <div className="fixed inset-0 flex items-center justify-center z-50">

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

          <FontSelector
            settingsCopy={settingsCopy}
            setSettingsCopy={setSettingsCopy}
          />

          <ColorSelector
            settingsCopy={settingsCopy}
            setSettingsCopy={setSettingsCopy}
          />

          <FontSizeSelector
            settingsCopy={settingsCopy}
            setSettingsCopy={setSettingsCopy}
          />

          <BoldNumberToggle
            settingsCopy={settingsCopy}
            setSettingsCopy={setSettingsCopy}
          />

          <ClearCacheButton
            setMessage={setMessage}
          />

          <RestoreSettingsButton
            setMessage={setMessage}
            restoreSettings={() => {
              setSettingsCopy(defaultSettings);
            }}
          />

        </div>

        <div className="flex flex-col gap-y-5 items-center justify-center pt-10">

          <button
            className="bg-green-600 px-2 py-1 rounded-xl hover:scale-105"
            onClick={() => {
              onClose();
              setSettings(settingsCopy);
              setLocalStorage("settings", JSON.stringify(settingsCopy));
            }}
          >
            Apply
          </button>

          {message && <p className="text-green-600">{message}</p>}

        </div>

      </div>
    </div>
  </>
};

export default Setting;