import { useGlobalState } from "../context/GlobalState";

function Info() {
  const { countriesPlayed, countriesLen, countriesGuessed, countriesSkipped } =
    useGlobalState();

  return (
    <div className="flex flex-col justify-center items-center font-quantico w-[80%]">
      <span>{`${countriesPlayed.length}/${countriesLen}`}</span>
      <div className="flex gap-3 font-bold text-xl">
        <span className="text-wrong">{countriesSkipped.length}</span>
        <span className="text-correct">{countriesGuessed.length}</span>
      </div>
    </div>
  );
}

export default Info;
