import { useGlobalState } from "../context/GlobalState";

function Flag() {
  const { country } = useGlobalState();

  return (
    <div className="h-[150%] aspect-square py-2 px-4 bg-slate-200 rounded-full pointer-events-auto flex flex-col justify-center items-center border-gray-700 border-inherit border-2 shadow-customShadow absolute right-0 translate-x-[50%]">
      <img
        src={`./flags/${country.flag}`}
        alt={`${country.name} flag`}
        className="w-full"
      />
    </div>
  );
}

export default Flag;
