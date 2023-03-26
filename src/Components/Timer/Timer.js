import { useState } from "react";
import classes from "./Timer.module.css";
import Time from "./Time";
function Timer(props) {
  function TimeOut() {
    let end = (
      <div className={classes.timer}>
        <h2>Times Up</h2>
        <button onClick={Reset}>Okay</button>
      </div>
    );
    setRender(end);
  }
  function Reset() {
    setRender(defaultForm);
  }
  function startTimer(e) {
    e.preventDefault();
    let min = e.target[0].value;
    let sec = e.target[1].value;
    setRender(
      <Time minuts={min} seconds={sec} reset={Reset} finish={TimeOut} />
    );
  }
  function min5() {
    let min = 5;
    let sec = 0;
    setRender(
      <Time minuts={min} seconds={sec} reset={Reset} finish={TimeOut} />
    );
  }
  function min10() {
    let min = 10;
    let sec = 0;
    setRender(
      <Time minuts={min} seconds={sec} reset={Reset} finish={TimeOut} />
    );
  }
  function minCus() {
    let inputForm = (
      <div className={classes.timer}>
        <form onSubmit={startTimer}>
          <input type="number" placeholder="Enter Minuts" min="0" max="60" />
          <input type="number" placeholder="Enter Seconds" min="0" max="60" />
          <button>Start Timer</button>
        </form>
      </div>
    );
    setRender(inputForm);
  }
  let defaultForm = (
    <div className={classes.timer}>
      <button onClick={min5}>5 min</button>
      <button onClick={min10}>10 min</button>
      <button onClick={minCus}>Custom</button>
    </div>
  );
  const [render, setRender] = useState(defaultForm);
  return <>{render}</>;
}
export default Timer;
