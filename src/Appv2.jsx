import { useState } from "react";
import "./App.css";

const Button = (props) => {
  return (
    <>
    <button onClick={props.onclick}>{props.name}</button>
    </>
  )
}

const DisplayButton = (props) =>{
  return (
    <>
    <p>Counter: {props.counter}</p>
    </>
  )
}
 
const AddCounter = () => {
  const [counter, setCounter] = useState(1);
  const [start, setStart] = useState(false);

  const increment = () => {
    setCounter(counter + 1);
    setStart(true);
  };

  const decrement = () => {
    if (counter - 1 < 0 && start === true) {
      alert("Can't go beyond zero");
      reset();
      return;
    }
    setCounter(counter - 1);
    setStart(true);
  };

  const reset = () => {
    setCounter(0);
    setStart(false);
  };

  console.log("rendering", counter);

  return (
    <>
      <div>
        <DisplayButton counter={counter}/>
        <Button onclick={increment} name="Plus +"></Button>
        <Button onclick={decrement} name="Minus -"></Button>
        <Button onclick={reset} name="Reset *"></Button>
      </div>
    </>
  );
};

export default AddCounter;
