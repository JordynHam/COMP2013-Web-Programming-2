import {useState} from "react";

export default function ColorBox({ color, colorList }) {
  const [styleColor, setColor] = useState(color);

  return <div className="colorBox" style={{backgroundColor:styleColor, width:"50px", height:"50px"}} onClick={() => {
    const newColor = colorList[Math.floor(Math.random() * colorList.length)];
    setColor(newColor);
  }}>
  </div>;
}