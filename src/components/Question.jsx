import Question0 from "./questions/Question0.jsx";
import Question1 from "./questions/Question1.jsx";
import Question2 from "./questions/Question2.jsx";
import Question3 from "./questions/Question3.jsx";
import Question4 from "./questions/Question4.jsx";
import Question5 from "./questions/Question5.jsx";
import Question6 from "./questions/Question6.jsx";
import Question7 from "./questions/Question7.jsx";
import Question8 from "./questions/Question8.jsx";
import Question9 from "./questions/Question9.jsx";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Question() {
  let { id } = useParams();
  id = parseInt(id, 10);
  const [ID, setID] = useState(id);

  const handleButtonClick = () => {
    setID(ID + 1);
  };

  switch (ID) {
    case 1:
      return <Question0 id={ID} onButtonClick={handleButtonClick} />;
    case 2:
      return <Question1 id={ID} onButtonClick={handleButtonClick} />;
    case 3:
      return <Question2 id={ID} onButtonClick={handleButtonClick} />;
    case 4:
      return <Question3 id={ID} onButtonClick={handleButtonClick} />;
    case 5:
      return <Question4 id={ID} onButtonClick={handleButtonClick} />;
    case 6:
      return <Question5 id={ID} onButtonClick={handleButtonClick} />;
    case 7:
      return <Question6 id={ID} onButtonClick={handleButtonClick} />;
    case 8:
      return <Question7 id={ID} onButtonClick={handleButtonClick} />;
    case 9:
      return <Question8 id={ID} onButtonClick={handleButtonClick} />;
    case 10:
      return <Question9 id={ID} onButtonClick={handleButtonClick} />;
  }
}
