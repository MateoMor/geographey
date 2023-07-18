import { useEffect } from "react";
import MapChart from "../components/MapChart";
import { useGlobalState } from "../context/GlobalState";
import GameContainer from "./GameContainer";
import Menu from "./Menu";
import ResultWindow from "./ResultWindow";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

function MainContainer({jsonData, center, zoom, minZoom, strokeWidth}) {
  const { gameFinished, resetGame } = useGlobalState();

  useEffect(() => {
    disablePageScroll()
    window.scrollTo({top:0})
    resetGame();
  }, [])
  

  return (
    <div>
      <GameContainer />
      <MapChart jsonData={jsonData} center={center} zoom={zoom} minZoom={minZoom} strokeWidth={strokeWidth}/>
      <Menu />
      {gameFinished && <ResultWindow />}
    </div>
  );
}

export default MainContainer;
