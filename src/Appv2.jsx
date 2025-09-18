import { useState } from "react";
import "./App.css";

const AddCounter = () => {
  const [counter, setCounter] = useState(0);
  setTimeout(() => {
    setCounter(counter + 1);
  }, 1000);

  console.log("rendering", counter);

  return (
    <>
      <div>
        <div>{counter}</div>
        <button onClick={() => setCounter(counter + 1)}>plus</button>
        <button onClick={() => setCounter(0)}>zero</button>
      </div>
    </>
  );
};

export default AddCounter;
