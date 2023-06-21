import { useState } from 'react';
import { set } from 'zod';

const Copyright = () => {

  const authorName = 'resumedev.site';
  const email = "m1662576219@gmail.com";

  const [showFeedback, setShowFeedback] = useState(false);


  return <>

    <div
      className="mt-10 text-gray-500 text-sm py-10 px-10 
      flex flex-row justify-between items-center"
    >

      <p>&copy; {authorName}</p>

      <button
        className=""
        onClick={() => setShowFeedback(true)}
      >give us feedback
      </button>

    </div>

    {showFeedback && <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-10"></div>}

  </>
};

export default Copyright;