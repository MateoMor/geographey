import { Link } from "react-router-dom";
import WindowHeader from "../components/WindowHeader";
import { useGlobalState } from "../context/GlobalState";

function Menu() {
  const { start, resetGame, gameFinished, setShowMenu } = useGlobalState();

  return (
    <div
      id="menu"
      onClick={(e) => {
        if (e.target.id == "menu") {
          setShowMenu(false);
          if (!gameFinished) {
            start();
          }
        }
      }}
      className="window-background"
    >
      <div className="window-style gap-6 px-12 py-12 rounded-lg">
        <WindowHeader text={"GEOGRAPHEY"} />
        <button id="menu" className="menu-button">
          RESUME
        </button>
        <button className="menu-button" onClick={() => resetGame()}>
          RESTART
        </button>
        <Link to="/geographey/" className="menu-button flex justify-center">
          MENU
        </Link>
      </div>
    </div>
  );
}

export default Menu;
