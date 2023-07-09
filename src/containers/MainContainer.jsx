import MapChart from "../components/MapChart";
import GameContainer from "./GameContainer";
import Menu from "./Menu";

function MainContainer() {
    return (
        <div>
            <GameContainer />
            <MapChart />
            <Menu/>
        </div>
    );
}

export default MainContainer;
