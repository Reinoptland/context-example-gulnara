import React, { useContext } from "react";
import { colorContext } from "../pages";

export default function Clock() {
  const { color, timers } = useContext(colorContext);
  return (
    <div style={{ backgroundColor: color, width: "200px", height: "200px" }}>
      Clock
      <p>Pomedoro: {timers.pomedoro}</p>
      <p>LongBreak: {timers.longBreak}</p>
      <p>ShortBreak: {timers.shortBreak}</p>
    </div>
  );
}
