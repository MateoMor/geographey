import { GiTrophyCup, GiDiamondTrophy } from "react-icons/gi";
import { HiTrophy } from "react-icons/hi2";
import { useGlobalState } from "../context/GlobalState";

function ScoreBar() {
  const { score, colors } = useGlobalState();

  return (
    <div className=" col-span-full w-[80%] h-4 rounded-full container-border tooltip relative responsive-score-bar">
      <div className="relative overflow-hidden w-[100%] h-[100%] rounded-full">
        <div
          id="scoreBar"
          className="absolute w-[100%] -left-[100%] h-full bg-violet-700 rounded-l-full duration-700"
        />
      </div>
      <div className="scoreBarTooltip left-[20%]">
        <div className="scorebarTooltpiCloud">
          <GiTrophyCup size="100%" fill={score >= 20 ? colors.bronce : ""} />
        </div>
      </div>
      <div className="scoreBarTooltip left-[50%]">
        <div className="scorebarTooltpiCloud">
          <GiTrophyCup size="100%" fill={score >= 50 ? colors.silver : ""} />
        </div>
      </div>
      <div className="scoreBarTooltip left-[80%]">
        <div className="scorebarTooltpiCloud">
          <GiTrophyCup size="100%" fill={score >= 80 ? colors.gold : ""} />
        </div>
      </div>
      <div className="scoreBarTooltip -right-[0.4px] rounded-r-full">
        <div className="scorebarTooltpiCloud">
          {score >= 100 ? (
            <img
              src="/geographey/assets/diamond-trophy.svg"
              alt="Diamond trophy"
            />
          ) : (
            <GiDiamondTrophy size="100%" />
          )}
        </div>
      </div>
    </div>
  );
}

export default ScoreBar;
