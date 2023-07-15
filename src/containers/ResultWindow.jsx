import { GiTrophyCup } from "react-icons/gi";

function ResultWindow() {
  return (
    <div
      id="resultWindow"
      onClick={(e) => {
        if (e.target.id == "resultWindow") {
          document.getElementById("resultWindow").style.display = "none";
        }
      }}
      className="window-background flex"
    >
      <div className="window-style w-[30%] h-[80%] flex p-4">
        <section className="bg-slate-600 flex justify-center items-center h-[65%] w-[100%]">
          <div className="w-[50%] bg-[#9b1c31] rounded-full aspect-square flex justify-center items-center">
            <GiTrophyCup size="70%" className="fill-gold" />
          </div>
          <div className=""></div>
        </section>
        <section className="flex bg-red-800 h-[35%] w-[100%] items-center justify-evenly flex-wrap gap[15%] ">
          <button id="resultWindow" className="menu-button resultWindowButton">
            MAP
          </button>
          <button className="menu-button resultWindowButton">MENU</button>
        </section>
      </div>
    </div>
  );
}

export default ResultWindow;
