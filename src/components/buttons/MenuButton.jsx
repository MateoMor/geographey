import { HiMenu } from "react-icons/hi";
import { useGlobalState } from "../../context/GlobalState";

function MenuButton() {
  const { pause, setShowMenu } = useGlobalState();

  return (
    <button
      className="button bg-secondaryColor"
      onClick={() => {
        setShowMenu(true)
        pause();
      }}
    >
      <HiMenu size="60%" />
    </button>
  );
}

export default MenuButton;
