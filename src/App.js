import { useState } from "react";
import classes from "./App.module.css";
import StopWatch from "./Components/StopWatch/StopWatch";
import Timer from "./Components/Timer/Timer";
import Clock from "./Components/Clock/Clock";
function App() {
  const [page, setPage] = useState(<Clock />);
  const [title, setTitle] = useState("Welcome");
  const [btn, setBtn] = useState("");
  function setStopWatch() {
    setPage(<StopWatch />);
    setTitle("StopWatch");
    setBtn(<button onClick={setTimer}>Open Timer</button>);
  }
  function setTimer() {
    setPage(<Timer />);
    setTitle("Timer");
    setBtn(<button onClick={setStopWatch}>Open StopWatch</button>);
  }
  function Buttons() {
    return (
      <>
        <button onClick={setStopWatch}>Open StopWatch</button>
        <button onClick={setTimer}>Open Timer</button>
      </>
    );
  }
  function Home() {
    setPage(<Clock />);
    setTitle("Welcome");
    setBtn("");
  }
  return (
    <div className={classes.home}>
      <h2>
        <span onClick={Home}>{title}</span>
        <span className={classes.navigationBtns}>
          {btn === "" ? <Buttons /> : btn}
        </span>
      </h2>
      {page}
    </div>
  );
}

export default App;
