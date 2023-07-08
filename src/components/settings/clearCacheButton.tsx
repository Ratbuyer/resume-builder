
import { clearLocalStorage } from "~/utils";

const clearCacheButton = ({
  setMessage
}: {
  setMessage: (m: string) => void
}) => (

  <div className="flex justify-between items-center mb-5 text-sm">
    <button
      className="rounded-lg bg-red-400 px-2 hover:scale-105 text-white"
      onClick={() => {
        clearLocalStorage();
        setMessage("Cache cleared!");
      }}
    >
      clear browser cache
    </button>
    <p className='ml-5'>
      Clear the changes we stored in your browser.
    </p>
  </div>

);

export default clearCacheButton;