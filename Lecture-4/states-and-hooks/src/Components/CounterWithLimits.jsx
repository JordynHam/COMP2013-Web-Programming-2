import { useState } from "react";
export default function CounterWithLimits() {
  const upperLimit = 10;
  const lowerLimit = -10;
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button
        onClick={() => {
          //Ternary shortcircuit
          //Removes the need for an else statement
          //use the && instead of a ?
          counter < upperLimit && setCounter(counter + 1);
        }}
      >
        Add
      </button>
      <button onClick={() => counter > lowerLimit && setCounter(counter - 1)}>
        Subtract
      </button>
    </div>
  );
}
