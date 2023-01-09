import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Feedback from "./components/Feedback";

function App({ name, age }) {
  const [counter, setCounter] = useState(0);
  setTimeout(() => setCounter(counter + 1), 1000);
  return <>{Feedback()}</>;
}

export default App;
