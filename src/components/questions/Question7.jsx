import { Link } from "react-router-dom";

export default function Question7({ id, onButtonClick }) {
    const parsedID = parseInt(id, 10);
    return (
        <div className="flex justify-center items-center text-white w-screen h-screen ">
            <div className="question h-auto w-2/5 flex flex-col justify-center items-center">
                <h1 className="p-1 border w-full text-center text-4xl font-bold">
                    <p>{parsedID}/10</p>
                    Co je MS-DOS ?
                    
                </h1>
                <form action="" className="w-full text-xl">
                    <div className="border w-full flex items-center justify-between text-3xl flex-col gap-y-6 ">
                    
                        <div className="flex justify-center items-center"><img src="../../src/assets/ms-dos.png" alt="isa" className="h-full w-2/6"/></div>
                        
                    </div>
                    <div className=" p-4 border w-full flex items-center text-2xl ">
            <input type="radio" value="os" name="q7"  className="" />
            <span className="ml-2">Operační systém firmy Microsoft vydaný v roce 1981</span>
          </div>
          <div className="p-4 border w-full flex items-center text-2xl">
            <input type="radio" value="pc" name="q7" className=""/>
            <span className="ml-2">Nejprodávanější a jeden z nejpopulárnějších 8bitových domácích počítačů.</span>
          </div>
          <div className="p-4 border w-full flex items-center text-2xl">
            <input type="radio" value="ram" name="q7" className=""/>
            <span className="ml-2">Speciální typ paměti RAM, který spolupracuje s grafickým procesorem vašeho počítače neboli GPU</span>
          </div>
          <div className="p-4 border w-full flex items-center text-2xl">
            <input type="radio" value="company" name="q7" className="" />
            <span className="ml-2">Největší světový výrobce polovodičových obvodů a dalších zařízení</span>
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
