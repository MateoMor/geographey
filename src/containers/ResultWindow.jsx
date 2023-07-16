import { GiTrophyCup } from "react-icons/gi";
import Stadistics from "../components/Stadistics";
import ScoreBar from "../components/ScoreBar";
import { useGlobalState } from "../context/GlobalState";
import WindowHeader from "../components/WindowHeader";

function ResultWindow() {
  const { resetGame, score, colors } = useGlobalState();

  return (
    <div
      id="resultWindow"
      onClick={(e) => {
        if (e.target.id == "resultWindow") {
          document.getElementById("resultWindow").style.display = "none";
        }
      }}
      className="window-background flex"
    >
      <div className="window-style w-[32%] min-w-[370px] h-[84%] flex p-4 rounded-lg">
        <section className="bg-neutralColor justify-items-center items-center h-[70%] w-[100%] grid grid-cols-2 grid-rows-3 rounded-t-lg">
          <WindowHeader text="RESULTS"/>
          <div className="w-[70%] bg-royalRed rounded-full aspect-square flex justify-center items-center row-span-2 container-border">
            {score >= 100 ? <img src="/geographey/assets/diamond-trophy.svg" alt="" className="m-[15%]" /> : score >= 80 ? <GiTrophyCup size="70%" className="fill-gold" /> : score >= 50 ? <GiTrophyCup size="70%" className="fill-silver" /> : score >= 20 ? <GiTrophyCup size="70%" className="fill-bronce" /> : <GiTrophyCup size="70%"/>}
          </div>
          <Stadistics />
          <ScoreBar />
        </section>
        <section className="flex bg-royalRed h-[30%] w-[100%] items-center justify-evenly flex-wrap py-[4%] rounded-lg">
          <button id="resultWindow" className="menu-button resultWindowButton">
            MAP
          </button>
          <button
            className="menu-button resultWindowButton"
            onClick={() => {
              resetGame();
            }}
          >
            Retry
          </button>
          <button className="menu-button resultWindowButton">MENU</button>
        </section>
      </div>
    </div>
  );
}

export default ResultWindow;
