import { Link } from "react-router-dom";
export default function Results() {
  return (
    <div className="flex justify-center items-center h-screen w-screen text-white text-2xl">
      <div className="question border h-2/6 w-2/6 flex flex-col justify-center items-center">
        <h1>Gratulujeme k dokončení testu !</h1>
        <p>Získal jsi přesně 10 bodů !</p>
        <div className="inline-flex rounded-md shadow-sm mt-3" role="group">
          <Link
            to={"/who/knows-yet"}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            <svg
              aria-hidden="true"
              className="w-11 h-11 mr-2 fill-current"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Seznam řešitelů
          </Link>
          <Link
            to={"/"}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            <img
              className="w-12 h-12 mr-2 fill-current"
              src="../../src/assets/homepage.svg"
              alt=""
            />
            Home page
          </Link>
        </div>
      </div>
    </div>
  );
}
