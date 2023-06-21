import { api } from "~/utils/api";

const Test = () => {

  const { mutate: sendFeedback } = api.feedbackapi.createFeedback.useMutation();


  return <>

    <h1 className="mt-20 text-3xl text-rose-400 text-center">Test Page</h1>

    <button
      className="bg-yellow-300"
      onClick={() => {

        sendFeedback({
          text: "test",
          email: "hello@gmail.ca"
        });

      }}
    >
      Create feedback
    </button>

  </>
};

export default Test;