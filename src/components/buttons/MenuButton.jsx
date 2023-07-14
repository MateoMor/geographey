import { HiMenu } from "react-icons/hi";
import { useGlobalState } from "../../context/GlobalState";

function MenuButton() {
  const { pause } = useGlobalState();

  return (
    <button
      className="button bg-secondaryColor"
      onClick={() => {
        document.getElementById("menu").style.display = "flex";
        pause();
      }}
    >
      <HiMenu size="60%" />
    </button>
  );
}

export default MenuButton;
