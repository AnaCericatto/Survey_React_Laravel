import { useState } from "react";
import PageComponent from "../components/PageComponent";
import { PhotoIcon } from "@heroicons/react/24/outline";
import TButton from "../components/core/TButton";

export default function SurveyView() {
  const [survey, setSurvey] = useState({
    title: "",
    slug: "",
    status: false,
    description: "",
    image: null,
    image_url: null,
    expire_date: "",
    questions: [],
  });

  const onImageChoose = () => {
    console.log("image");
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    console.log(ev);
  };

  return (
    <PageComponent title="Create new Survey">
      <form action="#" method="POST" onSubmit={onSubmit}>
        <div className="shadow sm:overflow-hidden sm:rounded-md">
          <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
            {/* Image - start */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                {" "}
                Photo
              </label>
              <div className="mt-1 flex items-center">
                {survey.image_url && (
                  <img
                    src={survey.image_url}
                    alt={survey.title}
                    className="w-32 h-32 object-cover"
                  />
                )}
                {!survey.image_url && (
                  <span className="flex justify-center items-center text-gray-400 h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                    <PhotoIcon className="w-8 h-8" />
                  </span>
                )}
                <button
                  type="button"
                  className="relative ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <input
                    type="file"
                    className="absolute left-0 top-0 right-0 bottom-0 opacity-0"
                    onChange={onImageChoose}
                  />
                  Change
                </button>
              </div>
            </div>
            {/* Image - end */}

            {/* Title - start */}
            <div className="col-span-6 sm:col-span-3 ">
              <label
                htmlFor="title"
                className="block text-sm font-semibold text-gray-700"
              >
                {" "}
                Survey Title
              </label>
              <div className="mt-2 flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={survey.title}
                  placeholder="Survey Title"
                  onChange={(ev) =>
                    setSurvey({ ...survey, title: ev.target.value })
                  }
                  className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                />
              </div>
            </div>
            {/* Title - end */}

            {/*Description*/}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="description"
                className="block text-sm font-semibold text-gray-700"
              >
                Description
              </label>
              {/* <pre>{ JSON.stringify(survey, undefined, 2) }</pre> */}
              <div className="mt-2">
                <textarea
                  name="description"
                  id="description"
                  value={survey.description || ""}
                  onChange={(ev) =>
                    setSurvey({ ...survey, description: ev.target.value })
                  }
                  placeholder="Describe your survey"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                ></textarea>
              </div>
            </div>
            {/*Description*/}

            {/*Expire Date*/}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="expire_date"
                className="block text-sm font-semibold text-gray-700"
              >
                Expire Date
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="expire_date"
                  id="expire_date"
                  value={survey.expire_date}
                  onChange={(ev) =>
                    setSurvey({ ...survey, expire_date: ev.target.value })
                  }
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            {/*Expire Date*/}

            {/*Active*/}
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="status"
                  name="status"
                  type="checkbox"
                  checked={survey.status}
                  onChange={(ev) =>
                    setSurvey({ ...survey, status: ev.target.checked })
                  }
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="comments"
                  className="font-semibold text-gray-700"
                >
                  Active
                </label>
                <p className="text-gray-500">
                  Whether to make survey publicly available
                </p>
              </div>
            </div>
            {/*Active*/}
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <TButton>Save</TButton>
          </div>
        </div>
      </form>
    </PageComponent>
  );
}
