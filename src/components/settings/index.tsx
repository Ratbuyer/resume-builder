import { useEffect, useState } from "react";
import Cross from "@public/assets/cross.svg";
import type * as types from "@constants/types";
import FontSelector from "./fontSelector";
import ColorSelector from "./colorSelector";
import FontSizeSelector from "./fontSizeSelector";
import BoldNumberToggle from "./boldNumberToggle";
import ClearCacheButton from "./clearCacheButton";
import RestoreSettingsButton from "./restoreSettingsButton";
import TemplateSelector from "./templateSelector";
import { setLocalStorage } from "~/utils";
import { settings as defaultSettings } from "@constants/defaults";

const Setting = ({
  settings,
  onClose,
  setSettings,
}: {
  settings: types.settingsType;
  onClose: () => void;
  setSettings: (settings: types.settingsType) => void;
}) => {
  const [settingsCopy, setSettingsCopy] =
    useState<types.settingsType>(settings);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("");
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [message]);

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="mx-4 h-[80%] w-auto min-w-[40%] max-w-[90%] rounded-2xl
                      bg-white p-4 pb-5 text-gray-700 shadow-2xl"
        >
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Settings</h3>
            <button
              className="mr-1 text-gray-500 hover:text-gray-700"
              onClick={() => {
                onClose();
              }}
            >
              <Cross />
            </button>
          </div>

          <div className="h-[70%] overflow-y-auto px-5">
            <FontSelector
              settingsCopy={settingsCopy}
              setSettingsCopy={setSettingsCopy}
            />

            <ColorSelector
              settingsCopy={settingsCopy}
              setSettingsCopy={setSettingsCopy}
            />

            <TemplateSelector
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

            <ClearCacheButton setMessage={setMessage} />

            <RestoreSettingsButton
              setMessage={setMessage}
              restoreSettings={() => {
                setSettingsCopy(defaultSettings);
              }}
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-y-5 pt-10">
            <button
              className="rounded-xl bg-green-600 px-2 py-1 hover:scale-105"
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
  );
};

export default Setting;
