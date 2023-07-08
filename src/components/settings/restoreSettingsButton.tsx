

const RestoreSettingsButton = ({
  setMessage,
  restoreSettings,
}: {
  setMessage: (m: string) => void,
  restoreSettings: () => void,
}) => (

  <div className="flex justify-between items-center mb-5 text-sm">
    <button
      className="rounded-lg bg-red-400 px-2 hover:scale-105 text-white"
      onClick={() => {
        restoreSettings();
        setMessage("settings restored!");
      }}
    >
      restore settings
    </button>
    <p className='ml-5'>
      Restore the default settings.
    </p>
  </div>

);

export default RestoreSettingsButton;