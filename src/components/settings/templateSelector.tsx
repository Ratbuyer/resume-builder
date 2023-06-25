
import type * as types from "@constants/types";
import { templates } from '~/constants/values';

const TemplateSelector = ({
  settingsCopy,
  setSettingsCopy
}: {
  settingsCopy: types.settingsType,
  setSettingsCopy: (settings: types.settingsType) => void
}) => (

  <div className="mb-5">
    <label
      htmlFor="template"
      className="block mb-2 text-sm font-medium">
      Choose Resume Template
    </label>
    <select
      id="template"
      className="bg-gray-50 border border-gray-300 text-sm 
            rounded-lg outline-0 block w-full p-2.5"
      value={settingsCopy.template}
      onChange={(e) => {
        const copy = { ...settingsCopy };
        copy.template = e.target.value
        setSettingsCopy(copy)
      }}
    >
      {Object.keys(templates).map((key, index) => (
        <option key={index} value={key}>{key}</option>
      ))}
    </select>
  </div>
);


export default TemplateSelector;