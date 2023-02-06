import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Error from "./components/Error.jsx";
import Question from "./components/Question.jsx";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/question/:id" element={<Question />}></Route>
      </Routes>
    </>
  );
}
