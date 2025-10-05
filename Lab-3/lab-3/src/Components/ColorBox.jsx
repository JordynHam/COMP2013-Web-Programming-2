import { useState } from "react";
export default function ColorBox({ color }) {
  const [colour, setColour] = useState("red");

  return <div onClick={() => setColour(color)}></div>;
}
