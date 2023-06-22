import { useState } from 'react';
import Feedback from './feedback';
import Link from 'next/link';

const Copyright = () => {

  const author = "github/Ratbuyer";
  const [showFeedback, setShowFeedback] = useState(false);

  return <>

    <div
      className="mt-10 text-gray-500 text-sm py-10 px-10 
      flex flex-row justify-between items-center"
    >

      <Link href="https://github.com/Ratbuyer">
        &copy; <span className='underline'>{author}</span>
      </Link>

      <button
        className="underline"
        onClick={() => setShowFeedback(true)}
      >send us feedback
      </button>

    </div>

    {showFeedback && <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-10"></div>}

    <Feedback
      isOpen={showFeedback}
      onClose={() => { setShowFeedback(false) }}
    />

  </>
};

export default Copyright;