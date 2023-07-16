import MenuButton from "../components/buttons/MenuButton";
import HintButton from "../components/buttons/HintButton";
import SkipButton from "../components/buttons/SkipButton";
import ResultButton from "../components/buttons/ResultButton";
import { useGlobalState } from "../context/GlobalState";

function ButtonsPad() {
  const { gameFinished } = useGlobalState();
  
  return (
    <div className="absolute -bottom-[85%] h-[60%] rounded-md flex gap-2">
      <MenuButton />
      <HintButton />
      <SkipButton />
      {gameFinished && <ResultButton />}
    </div>
  );
}

export default ButtonsPad;
