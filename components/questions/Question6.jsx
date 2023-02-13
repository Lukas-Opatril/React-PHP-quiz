import { Link } from "react-router-dom";

document.addEventListener("click", function (event) {
  if (event.target.tagName === "IMG") {
    const imgArray = Array.from(document.querySelectorAll("IMG"));
    imgArray.forEach((oneImg) => {
      oneImg.classList.remove("chosen-img");
    });
    document.getElementById("hidden").removeAttribute("name");
    event.target.classList.add("chosen-img");
    document
      .getElementById("hidden")
      .setAttribute("name", `${event.target.alt}`);
  }
});

export default function Question4({ id, onButtonClick }) {
  const parsedID = parseInt(id, 10);
  return (
    <div className="flex justify-center items-center text-white w-screen h-screen ">
      <div className=" question h-auto w-3/5 flex flex-col justify-center items-center  ">
        <h1 className="p-1  w-full text-center text-4xl font-bold border">
          <p>{parsedID}/10</p>
          Klikni na obrázek, na kterém se nachazí DDR 2 RAM
        </h1>
        <form
          action=""
          className="w-full h-auto flex flex-row justify-center text-xl gap-x-5 border  "
        >
          <div className="my-3">
            <img
              src="../../src/assets/ddr4-2.jpg"
              alt="q6-1"
              className="h-full w-48 cursor-pointer hover:border-8 hover:border-blue-500 "
            />
          </div>
          <div className="my-3">
            <img
              src="../../src/assets/ddr4.jpg"
              alt="q6-2"
              className="h-full w-48 cursor-pointer hover:border-8 hover:border-blue-500"
            />
          </div>
          <div className=" my-3">
            <img
              src="../../src/assets/ddr2.jpg"
              alt="q6-3"
              className="h-full w-48 cursor-pointer hover:border-8 hover:border-blue-500"
            />
          </div>
          <div className="my-3 ">
            <img
              src="../../src/assets/ddr1.jpg"
              alt="q6-4"
              className="h-full w-48 cursor-pointer hover:border-8 hover:border-blue-500"
            />
          </div>
          <input type="hidden" name="" id="hidden" />
        </form>
        <div className="flex h-fit w-full justify-center border  ">
          <Link
            to={`/question/${parsedID + 1}`}
            className=" my-3 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-xl  "
            onClick={onButtonClick}
          >
            Pokračovat dále...
          </Link>
        </div>
      </div>
    </div>
  );
}
