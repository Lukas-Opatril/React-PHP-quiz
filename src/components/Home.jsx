import "../css/index.css";
import React from "react";
import Navbar from "./Navbar.jsx";
import { Link } from "react-router-dom";
export default function App() {
  return (
    <div className="w-screen h-screen m-0 p-0 overflow-hidden">
      <Navbar />
      <div className="flex m-0 p-0 justify-start items-center h-screen ml-10">
        <div className="z-100 p-5 w-6/12 z-10">
          <h1 className="text-white text-4xl pb-4 z-10">
            Vyzkoušej svoje znalosti v Epo kvízu!
          </h1>
          <p className="text-2xl pb-6 z-10 text-white">
            Test obsahuje 10 otázek ohledně hardwaru a prověří tvé znalosti
          </p>
          <p className="border-l-8 pl-3 z-10 text-white font-black">
            Po dokončení testu po Vás budeme chtít vaše osobní údaje jako je
            vaše křestní jméno a příjmení, pokud nesouhlasíte s využítím Vašim
            osboních údaju, nezačínejte test!
          </p>
          <form action="" method="GET" className="mt-8 z-10">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              <Link to="/question/0"> Pustit se do testu !</Link>
            </button>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Ukaž výsledky řešitelů...
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
