import type * as types from "@constants/types";


const BoldNumberToggle = ({
  settingsCopy,
  setSettingsCopy
}: {
  settingsCopy: types.settingsType,
  setSettingsCopy: (settings: types.settingsType) => void
}) => (

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
);

export default BoldNumberToggle;