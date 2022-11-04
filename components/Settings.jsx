import React from "react";
import SettingsForm from "./SettingsForm";

export default function Settings(props) {
  return (
    <div>
      <SettingsForm setColor={props.setColor} color={props.color} />
    </div>
  );
}
