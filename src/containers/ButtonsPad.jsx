import MenuButton from "../components/buttons/MenuButton";
import HintButton from "../components/buttons/HintButton";
import SkipButton from "../components/buttons/SkipButton";

function ButtonsPad() {
  return (
    <div className="absolute -bottom-[85%] h-[60%] rounded-md flex gap-2">
      <MenuButton />
      <HintButton />
      <SkipButton />
    </div>
  );
}

export default ButtonsPad;
