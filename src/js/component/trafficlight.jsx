import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  const pushColor = (selectedColor) => {
    setColor(selectedColor);
  };

  const manualchangeColor = () => {
    if (color === "red") {
      setColor("yellow");
    } else if (color === "yellow") {
      setColor("green");
    } else if (color === "green") {
      setColor("red");
    }
  };
  return (
    <>
      <div className="traffic-light">
        <div
          className={`light red ${color === "red" ? "active" : ""}`}
          onClick={() => pushColor("red")}
        ></div>
        <div
          className={`light yellow ${color === "yellow" ? "active" : ""}`}
          onClick={() => pushColor("yellow")}
        ></div>
        <div
          className={`light green ${color === "green" ? "active" : ""}`}
          onClick={() => pushColor("green")}
        ></div>
      </div>
      <div className="stick">
        <div className="buttonChangeColor">
          <button className="pressButton" onClick={manualchangeColor}></button>
        </div>
      </div>
    </>
  );
};

export default TrafficLight;
