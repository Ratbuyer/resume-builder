import { useState, useEffect } from 'react';
import Cross from "@public/cross.svg";
import Notification from "@components/pages/notification";

const Setting = ({
  isOpen,
  onClose,
  cleanFunction,
}
  :
  {
    isOpen: boolean,
    onClose: () => void,
    cleanFunction: () => void,
  }) => {

  const [isMounted, setIsMounted] = useState(false);
  const [messsage, setMessage] = useState<string>("");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isOpen) {
    return null;
  }

  return <>

    {messsage && <Notification func={() => { setMessage("") }} message={messsage} />}

    <div className={`fixed inset-0 flex items-center justify-center z-50 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>

      <div className="bg-white rounded-lg p-4 pb-5 max-w-[50%] 
                      w-full mx-4 shadow-2xl text-gray-700">

        <div className="flex justify-between items-center mb-10">
          <h3 className="text-lg font-semibold">Settings</h3>
          <button className="text-gray-500 hover:text-gray-700 mr-1" onClick={onClose}>
            <Cross />
          </button>
        </div>

        <div className="flex justify-between items-center mb-4">
          <button
            className="rounded-lg bg-red-500 px-2 hover:scale-105"
            onClick={() => { cleanFunction; setMessage("cache cleared"); }}
          >clear browser cache
          </button>

          <p>
            <span className="text-red-500">! </span>
            This will clear the inputs we stored in your browser.
          </p>

        </div>

      </div>
    </div>
  </>;
};

export default Setting;