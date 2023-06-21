
import { clearLocalStorage } from "~/utils";

const clearCacheButton = () => (

  <div className="flex justify-between items-center mb-5 text-sm">
    <button
      className="rounded-lg bg-red-500 px-2 hover:scale-105"
      onClick={() => { clearLocalStorage(); }}
    >clear browser cache
    </button>
    <p className='ml-5'>
      Clear the changes we stored in your browser.
    </p>
  </div>

);

export default clearCacheButton;