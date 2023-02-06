import Question0 from "./questions/Question0.jsx";
import Question1 from "./questions/Question1.jsx";
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
    case 0:
      return <Question0 id={ID} onButtonClick={handleButtonClick} />;
    case 1:
      return <Question1 id={ID} onButtonClick={handleButtonClick} />;
  }
}
