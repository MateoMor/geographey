import { useGlobalState } from "../context/GlobalState";

function Flag() {
  const { country } = useGlobalState();

  return (
    <div className="h-full py-2 px-4 bg-gcPadding outline-gcBorder outline-2 outline rounded-full pointer-events-auto flex flex-col justify-center">
      <img src={`./flags/${country.flag}` }alt={`${country.name} flag`} className="w-20" />
    </div>
  );
}

export default Flag;
