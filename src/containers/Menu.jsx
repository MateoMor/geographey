import { useGlobalState } from "../context/GlobalState";

function Menu() {
  const { start, resetGame } = useGlobalState();

  return (
    <div
      id="menu"
      onClick={(e) => {
        if (e.target.id == "menu") {
          document.getElementById("menu").style.display = "none";
          start()
        }
      }}
      className="window-background"
    >
      <div className="window-style gap-6 px-12 py-12 rounded-lg">
        <h2 className="bg-mainColor absolute top-0 translate-y-[-50%] font-semibold container-border px-6 py-2 rounded-l-full rounded-r-full">
          GEOGRAPHEY
        </h2>
        <button id="menu" className="menu-button">
          RESUME
        </button>
        <button className="menu-button" onClick={() => resetGame()}>RESTART</button>
        <button className="menu-button">MAIN MENU</button>
      </div>
    </div>
  );
}

export default Menu;
