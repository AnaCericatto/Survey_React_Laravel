import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../axios";
import LoadingSpiner from "../components/LoadingSpiner";
import PublicQuestionView from "../components/PublicQuestionView";

export default function SurveyPublicView() {
  const answers = {};
  const [surveyFinished, setSurveyFinished] = useState(false);
  const [survey, setSurvey] = useState({
    questions: [],
  });
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();

  function answerChanged(question, value) {
    answers[question.id] = value;
    console.log(question, value);
  }

  function onSubmit(ev) {
    ev.preventDefault();

    console.log(answers);

    axiosClient
      .post(`/survey/${survey.id}/answer`, { answers })
      .then((response) => {
        console.log(response);
        setSurveyFinished(true);
      });
  }

  useEffect(() => {
    if (slug) {
      setLoading(true);
      axiosClient
        .get(`survey/get-by-slug/${slug}`)
        .then(({ data }) => {
          setSurvey(data.data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {loading && <LoadingSpiner />}
      {!loading && !surveyFinished && (
        <form onSubmit={(ev) => onSubmit(ev)} className="container mx-auto p-4">
          <div className="sm:grid sm:grid-cols-6 m-4 shadow-md bg-white rounded p-3">
            {survey.image_url && (
              <div className="mr-4">
                <img src={survey.image_url} alt="" />
              </div>
            )}
            <div className="col-span-5">
              <h1 className="text-3xl mb-3">{survey.title}</h1>
              <p className="text-gray-500 text-sm mb-3">
                {" "}
                Expire date: {survey.expire_date}
              </p>
              <p className="text-gray-500 text-sm mb-3">{survey.description}</p>
            </div>
          </div>

          <div>
            {survey.questions.map((question, index) => (
              <PublicQuestionView
                key={question.id}
                question={question}
                index={index}
                answerChanged={(val) => answerChanged(question, val)}
              />
            ))}
          </div>

          <div className="flex justify-end shadow-md mx-4 bg-white rounded p-3">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      )}
      {surveyFinished && (
        <div className="py-8 px-6 mt-3 bg-emerald-500 text-white w-[600px] mx-auto">
          🎉 Thank you for your time, we appreciate your honest answers.
        </div>
      )}
    </div>
  );
}
