import React from "react";
import { useGlobalState } from "../context/GlobalState";

function Stadistics() {
  const { score, seconds, minutes, hours, countriesGuessed, countriesSkipped } =
    useGlobalState();
  return (
    <div className="h-[80%] font-quantico flex flex-col justify-evenly row-span-2">
      <div>
        <h3 className="">Time:</h3>
        <p className="stadistics-text">
          {hours != 0 ? hours + ":" : ""}
          {minutes <= 9 ? "0" + minutes : minutes}:
          {seconds <= 9 ? "0" + seconds : seconds}
        </p>
      </div>
      <div>
        <h3>Correct / Wrong</h3>
        <p className="stadistics-text">
          {countriesGuessed.length} / {countriesSkipped.length}
        </p>
      </div>
      <div>
        <h3>Score:</h3>
        <p className="stadistics-text">{(score * 10).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Stadistics;
