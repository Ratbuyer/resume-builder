import { colorTable } from '~/constants/values';
import type * as types from '@constants/types';

const ColorSelector = (
  { settingsCopy, setSettingsCopy }:
    { settingsCopy: types.settingsType, setSettingsCopy: (settings: types.settingsType) => void }
) => (
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
);

export default ColorSelector;