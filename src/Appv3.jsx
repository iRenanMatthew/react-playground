import { useState } from "react";
import "./App.css";

const Button = (props) => {
  return <button onClick={props.onclick}>{props.name}</button>;
};

const Appv3 = () => {
  const [click, setClick] = useState({
    left: 0,
    right: 0,
  });

  const setLClick = () => {
    setClick({ ...click, left: click.left + 1 });
  };
  const setRClick = () => {
    setClick({ ...click, right: click.right + 1 });
  };

  return (
    <>
      <div>
        <h2>Click here to increment left number:</h2>
        <div>
          <span>Left: {click.left}</span>
          <br></br>
          <span>Right: {click.right}</span>
        </div>
        <div>
          <Button
            onclick={setLClick}
            name="Left +"
          />
          <Button
            onclick={setRClick}
            name="Right +"
          />
        </div>
      </div>
    </>
  );
};

export default Appv3;
