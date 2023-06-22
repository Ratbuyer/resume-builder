import { api } from "~/utils/api";
import Loading from "~/components/pages/loading";

const FeedbackList = () => {

  const { data: feedbacks, isSuccess, isLoading } = api.feedbackapi.fetchFeedbacks.useQuery();

  return (
    <div>
      <h1 className="text-5xl mt-20 text-center font-extra-bold
      bg-gradient-to-r from-red-600 to-blue-400 text-transparent bg-clip-text">
        Feedback List
      </h1>

      <div className="flex flex-col justify-center items-center">

        {isLoading ? Loading() :

          isSuccess && feedbacks?.map((feedback, index) => (
            <div
              className="flex justify-between items-center mt-10"
              key={index}
            >
              <p className="text-gray-700">{feedback.text}</p>
            </div>
          ))}

      </div>

    </div>
  );
};

export default FeedbackList;