import { useEffect, useRef, useState } from "react";
import classes from "./StopWatch.module.css";
function StopWatch(props) {
  const id = useRef();
  const [miliSeconds, setMiliSeconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minut, setMinut] = useState(0);
  const [hours, setHours] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [laps, setLaps] = useState([]);
  function IncreseTimer() {
    setMiliSeconds((lateststate) => lateststate + 1);
  }
  function startTimer() {
    setIsPaused(false);
  }
  function pauseTimer() {
    clearTimeout(id.current);
    setIsPaused(true);
  }
  function resetTimer() {
    setMiliSeconds(0);
    setSeconds(0);
    setMinut(0);
    setHours(0);
    clearTimeout(id.current);
    setIsPaused(true);
    setLaps([]);
  }
  function addLap() {
    if (hours === 0 && minut === 0 && seconds === 0 && miliSeconds === 0) {
      alert("StopWatch is Not Started");
    } else {
      setLaps([
        ...laps,
        {
          id: Math.random(),
          value: `${minut < 10 ? 0 : ""}${minut}:${
            seconds < 10 ? 0 : ""
          }${seconds}`,
          mili: `${miliSeconds < 10 ? 0 : ""}${miliSeconds}`,
        },
      ]);
    }
  }
  if (miliSeconds === 60) {
    clearTimeout(id);
    setMiliSeconds(0);
    setSeconds((lateststate) => lateststate + 1);
  }
  if (seconds === 60) {
    clearTimeout(id);
    setSeconds(0);
    setMinut((lateststate) => lateststate + 1);
  }
  if (minut === 60) {
    clearTimeout(id);
    setMiliSeconds(0);
    setSeconds(0);
    setMinut(0);
    setHours((lateststate) => lateststate + 1);
  }
  useEffect(
    function () {
      if (isPaused === false) {
        id.current = setTimeout(IncreseTimer, 15); //for Miliseconds Use 15
      }
    },
    [isPaused, miliSeconds]
  );
  return (
    <div className={classes.timer}>
      <p style={{ fontFamily: "monospace" }} onClick={addLap}>
        {minut < 10 ? 0 : ""}
        {minut}:{seconds < 10 ? 0 : ""}
        {seconds}
        <span style={{ fontSize: "20px" }}>
          {" "}
          {miliSeconds < 10 ? 0 : ""}
          {miliSeconds}
        </span>
      </p>
      <button onClick={isPaused ? startTimer : pauseTimer}>
        {isPaused ? "Start" : "Pause"}
      </button>
      <button onClick={resetTimer}>Reset</button>
      <p className={classes.note}>To Add Lap Click On Time</p>
      <ol className={classes.laps}>
        {laps.map(function (lap) {
          return (
            <li key={lap.id}>
              {lap.value}.<span style={{ fontSize: "18px" }}>{lap.mili}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
export default StopWatch;
