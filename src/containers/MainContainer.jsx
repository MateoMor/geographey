import { useEffect, useState } from "react";
import MapChart from "../components/MapChart";
import { useGlobalState } from "../context/GlobalState";
import GameContainer from "./GameContainer";
import Menu from "./Menu";
import ResultWindow from "./ResultWindow";
import { disablePageScroll } from "scroll-lock";



function MainContainer({jsonMap, jsonData, center, zoom, minZoom, strokeWidth}) {
  const { gameFinished, resetGame, setCountries, setOpen, showMenu } = useGlobalState();

  useEffect(() => {
    setCountries(jsonData)
    disablePageScroll()
    window.scrollTo({ top: 0 });
    resetGame();
    setOpen(false)
  }, [])
  
  return (
    <div>
      <GameContainer />
      <MapChart jsonMap={jsonMap} center={center} zoom={zoom} minZoom={minZoom} strokeWidth={strokeWidth}/>
      {showMenu && <Menu />}
      {gameFinished && <ResultWindow />}
    </div>
  );
}

export default MainContainer;
