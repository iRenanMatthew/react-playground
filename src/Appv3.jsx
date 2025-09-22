import { useState } from "react";
import "./App.css";

const Button = (props) => {
  return <button onClick={props.onclick}>{props.name}</button>;
};

const TotalClicks = (props) => {
  console.table(props)
  const {total, history} = props
  if (history.length === 0) {
    return (
      <>
        <h2>Total Clicks: {props.total}</h2>

        <h3>History:</h3>
        <ul>
          <li>The App is used by pressing the buttons</li>
        </ul>
      </>
    );
  } else {
    return (
      <>
        <h2>Total Clicks: {total}</h2>

        <h3>History:</h3>
        <ul>
          {history.map((item,idx) => (
            <>
              <ul key={idx}>
                <li>
                  <span>{item.changes + ", "}</span>
                  <span>{item.date}</span>
                </li>
              </ul>
            </>
          ))}
        </ul>
      </>
    );
  }
};

const Appv3 = () => {
  const [click, setClick] = useState({
    left: 0,
    right: 0,
  });
  const [historyClick, setHistoryClick] = useState([]);
  const [total, setTotal] = useState(0);

  const setLClick = () => {
    setClick({ ...click, left: click.left + 1 });
    setHistoryClick([...historyClick, { changes: "L", date: Date.now() }]);
    const updateLeft = click.left + 1;
    setTotal(updateLeft + click.right);
  };

  const setRClick = () => {
    setClick({ ...click, right: click.right + 1 });
    setHistoryClick([...historyClick, { changes: "R", date: Date.now() }]);
    const updateRight = click.right + 1;
    setTotal(click.left + updateRight);
  };

  return (
    <>
      <div>
        <h2>Click here to increment left number:</h2>
        <div>
          <span>Left: {click.left}</span>
          <br />
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
        <TotalClicks
          total={total}
          history={historyClick}
        />
      </div>
    </>
  );
};

export default Appv3;
