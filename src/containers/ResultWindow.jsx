import { GiTrophyCup } from "react-icons/gi";
import Stadistics from "../components/Stadistics";
import ScoreBar from "../components/ScoreBar";
import { useGlobalState } from "../context/GlobalState";
import WindowHeader from "../components/WindowHeader";
import { Link } from "react-router-dom";

function ResultWindow() {
  const { resetGame, score } = useGlobalState();

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
      <div className="absolute top-[calc(50vh-16px)] translate-y-[-50%] window-style p-4 rounded-lg w-[32%] min-w-[320px] h-[84%] max-h-[520px] grid grid-rows-4 responsive-result-window">
        {/* customized WindowHeader.jsx */}
        <h2 className="bg-mainColor absolute top-0 translate-y-[-50%] left-[50%] translate-x-[-50%] font-semibold container-border px-6 py-2 rounded-full custom-window-header">
          RESULTS
        </h2>
        <section className="bg-neutralColor justify-items-center items-center h-[100%] row-span-3  grid grid-cols-2 grid-rows-3 rounded-t-lg responsive-stadistics-section">
          <div className="w-[70%] bg-royalRed rounded-full aspect-square flex justify-center items-center row-span-2 container-border">
            {score >= 100 ? (
              <img
                src="/geographey/assets/diamond-trophy.svg"
                alt=""
                className="m-[15%]"
              />
            ) : score >= 80 ? (
              <GiTrophyCup size="70%" className="fill-gold" />
            ) : score >= 50 ? (
              <GiTrophyCup size="70%" className="fill-silver" />
            ) : score >= 20 ? (
              <GiTrophyCup size="70%" className="fill-bronce" />
            ) : (
              <GiTrophyCup size="70%" />
            )}
          </div>
          <Stadistics />
          <ScoreBar />
        </section>
        <section className="flex bg-royalRed h-[100%] row-span-1 items-center justify-evenly flex-wrap py-[4%] rounded-lg responsive-button-section">
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
          <Link to="/geographey/">
            <button className="menu-button resultWindowButton">MENU</button>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default ResultWindow;
