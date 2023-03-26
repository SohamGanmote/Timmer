import { useEffect, useRef, useState } from "react";
import classes from "./Timer.module.css";
function Time(props) {
  const id = useRef();
  const [seconds, setSeconds] = useState(props.seconds);
  const [minut, setMinut] = useState(props.minuts);
  const [isPaused, setIsPaused] = useState(false);
  function decreaseTimer() {
    if (seconds < 1) {
      setMinut((latestValue) => latestValue - 1);
      setSeconds(59);
    } else {
      setSeconds((latestValue) => latestValue - 1);
    }
  }
  function starteTimer() {
    setIsPaused(false);
    decreaseTimer();
  }
  function pauseTimer() {
    clearTimeout(id.current);
    setIsPaused(true);
  }
  useEffect(
    function () {
      if (isPaused === false) {
        id.current = setTimeout(decreaseTimer, 1000);
      }
    },
    [seconds]
  );
  if (seconds <= 0 && minut <= 0) {
    props.finish();
  }
  return (
    <div className={classes.timer}>
      <div>
        {minut < 10 ? 0 : ""}
        {minut}:{seconds < 10 ? 0 : ""}
        {seconds}
      </div>
      <div>
        <button
          onClick={isPaused ? starteTimer : pauseTimer}
          onDoubleClick={props.reset}
        >
          {isPaused ? "Play" : "Pause"}
        </button>
        <p>Dubble Click To Reset</p>
      </div>
    </div>
  );
}
export default Time;
