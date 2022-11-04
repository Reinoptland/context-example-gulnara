import React, { useContext } from "react";
import { colorContext } from "../pages";

export default function Clock() {
  const { color } = useContext(colorContext);
  return (
    <div style={{ backgroundColor: color, width: "200px", height: "200px" }}>
      Clock
    </div>
  );
}
