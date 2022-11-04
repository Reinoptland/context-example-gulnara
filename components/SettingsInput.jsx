import React, { useContext } from "react";
import { colorContext } from "../pages";

export default function SettingsInput() {
  const { color, setColor } = useContext(colorContext);
  return (
    <select onChange={(e) => setColor(e.target.value)} value={color}>
      <option value="red">Red</option>
      <option value="violet">Violet</option>
      <option value="hotpink">Hotpink</option>
    </select>
  );
}
