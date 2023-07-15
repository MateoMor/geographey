import MenuButton from "../components/buttons/MenuButton";
import HintButton from "../components/buttons/HintButton";
import SkipButton from "../components/buttons/SkipButton";
import ResultButton from "../components/buttons/ResultButton";

function ButtonsPad() {
  return (
    <div className="absolute -bottom-[85%] h-[60%] rounded-md flex gap-2">
      <MenuButton />
      <HintButton />
      <SkipButton />
      <ResultButton />
    </div>
  );
}

export default ButtonsPad;
