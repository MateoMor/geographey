import Flag from "../components/Flag";
import Info from "../components/Info";

function GameContainer() {
  return (
    <div
      id="gameContainer"
      className=" absolute w-[35%] h-[16%] pointer-events-none right-[50%] translate-x-[50%] flex"
    >
      <Flag />
      <Info />
    </div>
  );
}

export default GameContainer;
