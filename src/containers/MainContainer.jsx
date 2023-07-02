import MapChart from "../components/MapChart";
import GameContainer from "./GameContainer";

function MainContainer() {
    return (
        <div className="bg-slate-200 mx-28 p-3">
            <GameContainer />
            <MapChart />
        </div>
    );
}

export default MainContainer;
