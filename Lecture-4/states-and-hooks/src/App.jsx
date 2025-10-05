import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BadCounter from "./Components/BadCounter";
import Counter from "./Components/Counter";
import CounterWithLimits from "./Components/CounterWithLimits";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BadCounter />
      <Counter />
      <CounterWithLimits />
    </>
  );
}

export default App;
