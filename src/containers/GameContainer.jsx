import ResultInfo from "../components/resultWindowElements/ResultInfo";
import CountryName from "../components/gameHeader/CountryName";
import CountryFlag from "../components/gameHeader/CountryFlag";
import ButtonsPad from "./ButtonsPad";
import StopWatch from "../components/gameElements/StopWatch";

function GameContainer() {
  return (
    <div className="absolute w-[100%] h-[95px] pointer-events-none pt-[24px]  px-3 flex justify-between">
      <div
        id="gameContainer"
        className="bg-neutralColor relative w-[26%] min-w-[280px] h-[100%] max-[490px]:h-[85%] max-[490px]:min-w-[260px] text-sm flex items-center  rounded-l-2xl container-border pointer-events-auto"
      >
        <ResultInfo />
        <CountryName />
        <CountryFlag />
        <ButtonsPad />
      </div>

      <StopWatch />
    </div>
  );
}

export default GameContainer;
