import { Link } from "react-router-dom";

export default function Question3({ id, onButtonClick }) {
  const parsedID = parseInt(id, 10);
  return (
    <div className="flex justify-center items-center text-white w-screen h-screen ">
      <div className="question h-auto w-2/5 flex flex-col justify-center items-center">
        <h1 className="p-1 border w-full text-center text-4xl font-bold">
          <p>{parsedID}/10</p>
           Co NEPATŘÍ mezi vstupní zařízení ?
        </h1>
        <form action="" className="w-full text-xl">
          <div className=" p-4 border w-full flex items-center text-3xl ">
            <input type="radio" value="Klávesnice" name="q3" />
            <span className="ml-2">Klávesnice</span>
          </div>
          <div className="p-4 border w-full flex items-center text-3xl">
            <input type="radio" value="Myš" name="q3" />
            <span className="ml-2">Myš</span>
          </div>
          <div className="p-4 border w-full flex items-center text-3xl">
            <input type="radio" value="Trackpoint" name="q3" />
            <span className="ml-2">Trackpoint</span>
          </div>
          <div className="p-4 border w-full flex items-center text-3xl">
            <input type="radio" value="PCIe 6.0" name="q3" />
            <span className="ml-2">Tiskárna</span>
          </div>
          <div className=" w-full h-fit justify-end flex items-center text-3xl">
            <Link
              to={`/question/${parsedID + 1}`}
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