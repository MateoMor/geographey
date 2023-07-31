import React from "react";
import { useGlobalState } from "../context/GlobalState";

function Stadistics() {
  const { score, seconds, minutes, hours, countriesGuessed, countriesSkipped } =
    useGlobalState();
  return (
    <div className="font-quantico flex flex-col justify-evenly row-span-2 responsive-stadistics-container">
      <div>
        <h3 className="responsive-stadistics-title">Time:</h3>
        <p className="stadistics-text responsive-stadistics-text">
          {hours != 0 ? hours + ":" : ""}
          {minutes <= 9 ? "0" + minutes : minutes}:
          {seconds <= 9 ? "0" + seconds : seconds}
        </p>
      </div>
      <div>
        <h3 className="responsive-stadistics-title">Correct / Wrong:</h3>
        <p className="stadistics-text responsive-stadistics-text">
          {countriesGuessed.length} / {countriesSkipped.length}
        </p>
      </div>
      <div>
        <h3 className="responsive-stadistics-title">Score:</h3>
        <p className="stadistics-text responsive-stadistics-text">{(score * 10).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Stadistics;
