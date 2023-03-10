import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex justify-center items-center h-screen w-screen text-white text-2xl">
      <div className="question border h-fit w-2/6 flex flex-col justify-start items-center">
        <div className="flex flex-col justify-start items-center m-3">
          <h1 className="border-b-4 mb-3">Gratulujeme k dokončení testu !</h1>
          <p className="text-lg border-b mb-3">
            Už zbývá poslední krok. Vyplň prosím formálář níže, ať můžeme tvoje
            skore uložit do naší databáze.
          </p>
          <form action="/results" className="flex flex-col">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Jméno
            </label>
            <input
              type="text"
              name="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Příjmení
            </label>
            <input
              type="text"
              name="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              required
            />
            <button
              type="submit"
              className="mt-3 text-gray-900 bg-white  border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Odeslat
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
