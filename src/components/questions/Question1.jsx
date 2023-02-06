import { Link } from "react-router-dom";

export default function Question0({ id, onButtonClick }) {
  const parsedID = parseInt(id, 10);
  return (
    <div className="flex justify-center items-center text-white w-screen h-screen ">
      <div className="question h-auto w-2/5 flex flex-col justify-center items-center">
        <h1 className="p-1 border w-full text-center text-4xl font-bold">
          <p>{parsedID}/10</p>
          Lorem ipsum dolor sit amng eois, nesciunt voluptatibus?
        </h1>
      </div>
    </div>
  );
}
