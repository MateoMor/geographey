import React from "react";
import { useGlobalState } from "../context/GlobalState";

function AnswerCounter() {
  const { countriesPlayed, countriesLen, countriesGuessed, countriesSkipped } =
    useGlobalState();

  return (
    <div className="flex flex-col items-center font-quantico">
      <p>{`${countriesPlayed.length}/${countriesLen}`}</p>
      <div className="flex justify-evenly w-[100%] font-bold text-lg">
        <p className="text-correct">{countriesGuessed.length}</p>
        <p className="text-wrong">{countriesSkipped.length}</p>
      </div>
    </div>
  );
}

export default AnswerCounter;
