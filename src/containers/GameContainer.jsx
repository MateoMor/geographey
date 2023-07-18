import Info from "../components/Info";
import CountryName from "../components/CountryName";
import Flag from "../components/Flag";
import ButtonsPad from "./ButtonsPad";
import StopWatch from "../components/StopWatch";

function GameContainer() {
  return (
    <div className="absolute w-[100%] h-[15%] pointer-events-none pt-[1.8%] px-3 flex justify-between ">
      <div
        id="gameContainer"
        className="bg-neutralColor relative w-[26%] min-w-[280px] h-[100%] flex items-center  rounded-l-2xl container-border pointer-events-auto"
      >
        <Info />
        <CountryName />
        <Flag />
        <ButtonsPad />
      </div>

      <StopWatch />
    </div>
  );
}

export default GameContainer;
