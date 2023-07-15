import { HiStar } from "react-icons/hi";

function ResultButton() {
  return (
    <button id="resultButton" className="button bg-gold hidden" onClick={() => {
        document.getElementById("resultWindow").style.display = "flex";
    }}>
      <HiStar size="60%"/>
    </button>
  );
}

export default ResultButton;
