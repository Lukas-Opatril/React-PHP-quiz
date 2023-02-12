import { Link } from "react-router-dom";
import "../../css/App.css"

export default function Question0({ id, onButtonClick }) {
  const parsedID = parseInt(id, 10);
  return (
    <div className="flex justify-center items-center text-white w-screen h-screen ">
      <div className="question h-auto w-2/5 flex flex-col justify-center items-center">
        <h1 className="p-1 border w-full text-center text-4xl font-bold">
          <p>{parsedID}/10</p>
          Co nepatří mezi interní sběrnice pro karty ?
        </h1>
        <form action="" className="w-full text-xl">
          <div className=" p-4 border w-full flex items-center text-3xl ">
            <input type="radio" name="q0" id="" value = "PCI" />
            <span className="ml-2">PCI</span>
          </div>
          <div className="p-4 border w-full flex items-center text-3xl">
            <input type="radio" name="q0" id="" value = "AGP"/>
            <span className="ml-2">AGP</span>
          </div>
          <div className="p-4 border w-full flex items-center text-3xl">
            <input type="radio" name="q0" id=""  value="ISA"/>
            <span className="ml-2">ISA</span>
          </div>
          <div className="p-4 border w-full flex items-center text-3xl">
            <input type="radio" name="q0" id=""  value= "ESA"/>
            <span className="ml-2">ESA</span>
          </div>
          <div className=" w-full h-fit justify-end flex items-center text-3xl">
            <Link
              to={`/question/${parsedID+1}`}
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-xl  "
              onClick={onButtonClick}
            >
              Pokračovat dále...
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
