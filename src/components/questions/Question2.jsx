import { Link } from "react-router-dom";

export default function Question2({ id, onButtonClick }) {
    const parsedID = parseInt(id, 10);
    return (
        <div className="flex justify-center items-center text-white w-screen h-screen ">
            <div className="question h-auto w-2/5 flex flex-col justify-center items-center">
                <h1 className="p-1 border w-full text-center text-4xl font-bold">
                    <p>{parsedID}/10</p>
                    Napiš, zda je sběrnice paralelní či sériová ?
                </h1>
                <form action="" className="w-full text-xl">
                    <div className="p-10 border w-full flex items-center justify-between text-3xl flex-col gap-y-6 ">
                    
                        <p className="w-full"><img src="../../src/assets/picture1.jpg" alt="isa" className="w-full"/></p>
                        <input type="text" name="q2" placeholder="hybridní" className="text-black rounded-lg text-center w-full text-4xl py-1"/>
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
