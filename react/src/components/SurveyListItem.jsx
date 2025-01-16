import {
  ArrowTopRightOnSquareIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import TButton from "./core/TButton";

export default function SurveyListItem({ survey, onDeleteClick }) {
  return (
    <div className="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 max-h-[470px]">
      {survey.image_url && (
        <img
          src={survey.image_url}
          alt={survey.title}
          className="w-full h-48 object-cover"
        />
      )}

      <h4 className="mt-4 text-lg font-bold">{survey.title}</h4>
      {survey.description && (
        <div
          dangerouslySetInnerHTML={{ __html: survey.description }}
          className="overflow-y-scroll flex-1"
        ></div>
      )}
      {!survey.description && (
        <div className="overflow-y-scroll flex-1 text-gray-500">
          No description
        </div>
      )}

      <div className="flex justify-between items-center mt-3">
        <TButton to={`/surveys/${survey.id}`}>
          <PencilIcon className="w-5 h-5 mr-2 " />
          Edit
        </TButton>
        <div className="flex items-center">
          <TButton href={`/view/survey/${survey.slug}`} circle link>
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </TButton>

          {survey.id && (
            <TButton
              // eslint-disable-next-line no-unused-vars
              onClick={(ev) => onDeleteClick(survey.id)}
              circle
              link
              color="red"
            >
              <TrashIcon className="w-5 h-5" />
            </TButton>
          )}
        </div>
      </div>
    </div>
  );
}
