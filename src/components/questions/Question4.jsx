import { Link } from "react-router-dom";

document.addEventListener("click", function (event) {
  if (event.target.tagName === "IMG") {
    const imgArray = Array.from(document.querySelectorAll("IMG"));
    imgArray.forEach((oneImg) => {
      oneImg.classList.remove("chosen-img");
      oneImg.removeAttribute("id");
    });
    event.target.classList.add("chosen-img");
    event.target.addAttribute("id", "q4-chosen");
  }
});

export default function Question4({ id, onButtonClick }) {
  const parsedID = parseInt(id, 10);
  return (
    <div className="flex justify-center items-center text-white w-screen h-screen ">
      <div className=" question h-auto w-3/5 flex flex-col justify-center items-center ">
        <h1 className="p-1  w-full text-center text-4xl font-bold border">
          <p>{parsedID}/10</p>
          Klikni na obrázek, na kterém se nachazí rozhrání RS232
        </h1>
        <form
          action=""
          className="w-full h-auto flex flex-row justify-center text-xl gap-x-5 border  "
        >
          <div className="my-3">
            <img
              src="../../src/assets/picture2.jpg"
              alt="q4-1"
              className="h-full w-48 cursor-pointer hover:border-8 hover:border-blue-500 "
            />
          </div>
          <div className="my-3">
            <img
              src="../../src/assets/picture3.jpg"
              alt="q4-2"
              className="h-full w-48 cursor-pointer hover:border-8 hover:border-blue-500"
            />
          </div>
          <div className=" my-3">
            <img
              src="../../src/assets/picture4.jpg"
              alt="q4-3"
              className="h-full w-48 cursor-pointer hover:border-8 hover:border-blue-500"
            />
          </div>
          <div className="my-3 ">
            <img
              src="../../src/assets/picture5.jpg"
              alt="q4-4"
              className="h-full w-48 cursor-pointer hover:border-8 hover:border-blue-500"
            />
          </div>
        </form>
        <div className="flex h-fit w-full justify-center my-3 ">
          <Link
            to={`/question/${parsedID + 1}`}
            className=" text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-xl  "
            onClick={onButtonClick}
          >
            Pokračovat dále...
          </Link>
        </div>
      </div>
    </div>
  );
}
