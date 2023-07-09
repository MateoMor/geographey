import Info from "../components/Info";
import CountryName from "../components/CountryName";
import Flag from "../components/Flag";
import ButtonsPad from './ButtonsPad'

function GameContainer() {
  return (
    <div
      id="gameContainer"
      className="bg-neutralColor absolute w-[28%] min-w-[320px] h-[11%] flex items-center gap-1 mx-3 my-6 rounded-l-xl container-border"
    >
      <Info />
      <CountryName />
      <Flag />
      <ButtonsPad/>
    </div>
  );
}

export default GameContainer;
