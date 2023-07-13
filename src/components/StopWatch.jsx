import React from "react";
import { useGlobalState } from "../context/GlobalState";

function StopWatch() {
  const { seconds, minutes, hours } = useGlobalState();

  return (
    <div className="font-quantico text-4xl pointer-events-auto mr-3">
      <div>
        {hours !== 0 && <span>{hours}:</span>}
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
    </div>
  );
}

export default StopWatch;
