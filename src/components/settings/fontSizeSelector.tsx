import type * as types from "@constants/types";

const FontSizeSelector = (
  { settingsCopy, setSettingsCopy }: { settingsCopy: types.settingsType, setSettingsCopy: (settings: types.settingsType) => void }
) => (

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
);

export default FontSizeSelector;