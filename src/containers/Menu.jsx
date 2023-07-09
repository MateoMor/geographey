function Menu() {
  return (
    <div
      id="menu"
      onClick={(e) => {
        if (e.target.id == "menu" || e.target.id == "resume") {
            document.getElementById("menu").style.display = "none"
        }
      }}
      className="absolute top-0 h-full w-full flex justify-center items-center  bg-[#00000043]"
    >
      <div className="bg-neutralColor pointer-events-auto flex flex-col items-center gap-6 px-12 py-12 relative container-border rounded-lg">
        <h2 className="bg-mainColor absolute top-0 translate-y-[-50%] font-semibold container-border px-6 py-2 rounded-l-full rounded-r-full">
          GEOGRAPHEY
        </h2>
        <button id="resume" className="menu-button">RESUME</button>
        <button className="menu-button">NEW GAME</button>
        <button className="menu-button">MAIN MENU</button>
      </div>
    </div>
  );
}

export default Menu;
