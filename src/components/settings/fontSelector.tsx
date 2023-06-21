import { fonts } from "~/constants/values";
import type * as types from "@constants/types";

const FontSelector = (
  { settingsCopy, setSettingsCopy }:
    { settingsCopy: types.settingsType, setSettingsCopy: (settings: types.settingsType) => void }
) => (

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
);

export default FontSelector;