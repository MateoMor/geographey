import Info from "../components/Info";
import CountryName from "../components/CountryName";
import Flag from "../components/Flag";

function GameContainer() {
  return (
    <div
      id="gameContainer"
      className="bg-zinc-300 absolute w-[28%] min-w-[320px] h-[11%] pointer-events-none flex items-center gap-1 mx-3 my-6 rounded-l-2xl border-2 border-gray-900"
    >
      <Info />
      <CountryName />
      <Flag />
    </div>
  );
}

export default GameContainer;
