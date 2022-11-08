import React, { useContext } from "react";
import { colorContext } from "../pages";
import SettingsInput from "./SettingsInput";

export default function SettingsForm() {
  const { updateTimers, timers } = useContext(colorContext);

  return (
    <form>
      <SettingsInput />
      <label>Pomedoro:</label>
      <input name="pomedoro" value={timers.pomedoro} onChange={updateTimers} />
      <label>Short Break:</label>
      <input
        name="shortBreak"
        value={timers.shortBreak}
        onChange={updateTimers}
      />
      <label>Long Break:</label>
      <input
        name="longBreak"
        value={timers.longBreak}
        onChange={updateTimers}
      />
    </form>
  );
}
