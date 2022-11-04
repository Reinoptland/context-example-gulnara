import React from "react";

export default function SettingsInput(props) {
  return (
    <select
      onChange={(e) => props.setColor(e.target.value)}
      value={props.color}
    >
      <option value="red">Red</option>
      <option value="violet">Violet</option>
      <option value="hotpink">Hotpink</option>
    </select>
  );
}
