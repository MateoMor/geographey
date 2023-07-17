import WindowHeader from "../components/WindowHeader";
import { useGlobalState } from "../context/GlobalState";

function Menu() {
  const { start, resetGame, gameFinished } = useGlobalState();

  return (
    <div
      id="menu"
      onClick={(e) => {
        if (e.target.id == "menu") {
          document.getElementById("menu").style.display = "none";
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
        <button className="menu-button">MENU</button>
      </div>
    </div>
  );
}

export default Menu;
