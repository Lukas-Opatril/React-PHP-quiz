import { Link } from "react-router-dom";

export default function Question9({ id, onButtonClick }) {
    const parsedID = parseInt(id, 10);
    return (
        <div className="flex justify-center items-center text-white w-screen h-screen ">
            <div className="question h-auto w-2/5 flex flex-col justify-center items-center">
                <h1 className="p-1 border w-full text-center text-4xl font-bold">
                    <p>{parsedID}/10</p>
                    Jaké dva typy úkonů BIOS zajišťuje během startu počítače?
                    
                </h1>
                <form action="" className="w-full text-xl">
                    <div className="p-6 border w-full flex items-center justify-between text-3xl flex-col gap-y-6 ">
                    
                        <div className="flex justify-center items-center"><img src="../../src/assets/bios.jpg" alt="bios" className="h-full w-4/6"/></div>
                        
                    </div>
                    <div className=" p-4 border w-full flex items-center text-2xl ">
            <input type="checkbox" value="os" name="check[]" />
            <span className="ml-2">Spuštění počítačového operačního systému</span>
          </div>
          <div className="p-4 border w-full flex items-center text-2xl">
            <input type="checkbox" value="pc" name="check[]" />
            <span className="ml-2">Spravuje datový tok mezi operačním systémem (OS) počítače a připojenými zařízeními, jako je pevný disk, grafický adaptér, klávesnice, myš a tiskárna.</span>
          </div>
          <div className="p-4 border w-full flex items-center text-2xl">
            <input type="checkbox" value="ram" name="check[]" />
            <span className="ml-2">Zkontroluje, jestli není počítač nakažený virem</span>
          </div>
          <div className="p-4 border w-full flex items-center text-2xl">
            <input type="checkbox" value="company" name="check[]" />
            <span className="ml-2">Stáhne a automaticky nainstaluje nejnovější ovladače pro grafickou kartu</span>
          </div>

                    <div className=" w-full h-fit justify-end flex items-center text-3xl">
                        <Link
                            to={`/register`}
                            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-xl  "
                            
                        >
                            Dokončit test
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
