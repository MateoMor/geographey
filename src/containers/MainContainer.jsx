import { useEffect } from "react";
import MapChart from "../components/MapChart";
import { useGlobalState } from "../context/GlobalState";
import GameContainer from "./GameContainer";
import Menu from "./Menu";
import ResultWindow from "./ResultWindow";
import { disablePageScroll } from "scroll-lock";



function MainContainer({jsonMap, jsonData, center, zoom, minZoom, strokeWidth}) {
  const { gameFinished, resetGame, setCountries } = useGlobalState();

  useEffect(() => {
    setCountries(jsonData)
    
  }, [])
  

  useEffect(() => {
    disablePageScroll()
    window.scrollTo({top:0})
    resetGame();
  }, [])
  

  return (
    <div>
      <GameContainer />
      <MapChart jsonMap={jsonMap} center={center} zoom={zoom} minZoom={minZoom} strokeWidth={strokeWidth}/>
      <Menu />
      {gameFinished && <ResultWindow />}
    </div>
  );
}

export default MainContainer;
