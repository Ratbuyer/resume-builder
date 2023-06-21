import { useState, useRef } from 'react';
import Cross from "@public/assets/cross.svg";
import { api } from "~/utils/api";

const Feedback = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean,
  onClose: () => void,
}) => {

  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const { mutate: sendFeedback } = api.feedbackapi.createFeedback.useMutation();

  if (!isOpen) {
    return null;
  }

  return <>

    <div className="fixed inset-0 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl p-4 pb-5 max-w-[90%] min-w-[40%]
                      w-auto mx-4 shadow-2xl text-gray-700 h-[80%]">

        <div className="flex justify-between items-center mb-5">
          <h3 className="text-lg font-semibold">Feedback</h3>
          <button
            className="text-gray-500 hover:text-gray-700 mr-1"
            onClick={() => {
              onClose();
            }}
          >
            <Cross />
          </button>
        </div>

        <form
          ref={formRef}
          className='overflow-y-auto h-[70%] px-5'>

          <input
            type="email"
            id="feedbackEmail"
            placeholder="Your email (optional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-200 p-2 rounded-xl outline-none"
          />

          <textarea
            id="feedbackText"
            placeholder="Your feedback*"
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full bg-gray-200 p-2 rounded-xl outline-none mt-5 h-full"
          />

        </form>

        <div className="flex justify-center pt-10">
          <button
            className="bg-green-600 px-2 py-1 rounded-xl hover:scale-105"
            onClick={() => {
              if (!formRef.current?.checkValidity()) {
                formRef.current?.reportValidity();
                return;
              }

              sendFeedback({
                text: text,
                email: email,
              });

              onClose();
            }}
          >
            Send
          </button>
        </div>

      </div>
    </div>
  </>
};

export default Feedback;