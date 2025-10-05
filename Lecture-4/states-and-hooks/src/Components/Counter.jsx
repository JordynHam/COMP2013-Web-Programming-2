import { useState } from "react"; //Creates a variable to store in and a function responsible for updating variable
export default function Counter() {
  //we defined the variable and setter function then we assign useState to them
  //and add the initial value for the variable as a parameter for the useState function
  let initState = 2000;
  const [counter, setCounter] = useState(initState);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button
        onClick={() => {
          //setCounter cannout take the increment operator (++) because States don't update until it rerenders
          //Must be counter + 1 instead of counter++
          setCounter(counter + 1);
        }}
      >
        Add to counter
      </button>
      <button onClick={() => setCounter(counter - 1)}>
        Remove from counter
      </button>
      <button onClick={() => setCounter(initState)}>Reset counter</button>
    </div>
  );
}
