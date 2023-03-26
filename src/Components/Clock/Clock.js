import { useState } from "react";
import classes from "./Clock.module.css";
function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toLocaleDateString());
  setTimeout(function () {
    setTime(new Date().toLocaleTimeString());
  }, 1000); //Updated Every 1 sec
  setTimeout(function () {
    setDate(new Date().toLocaleDateString());
  }, 1000000); //Update Every 12 hours
  return (
    <div className={classes.clock}>
      <div className={classes.time}>{time}</div>
      <div className={classes.date}>{date}</div>
    </div>
  );
}
export default Clock;
