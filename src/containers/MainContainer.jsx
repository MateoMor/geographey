import MapChart from "../components/MapChart";
import { useGlobalState } from "../context/GlobalState";
import GameContainer from "./GameContainer";
import Menu from "./Menu";
import ResultWindow from "./ResultWindow";

function MainContainer() {
  const { gameFinished } = useGlobalState();

  return (
    <div>
      <GameContainer />
      <MapChart />
      <Menu />
      {gameFinished && <ResultWindow />}
    </div>
  );
}

export default MainContainer;
