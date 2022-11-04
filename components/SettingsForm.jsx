import React from "react";
import SettingsInput from "./SettingsInput";

export default function SettingsForm(props) {
  return (
    <form>
      <SettingsInput setColor={props.setColor} color={props.color} />
    </form>
  );
}
