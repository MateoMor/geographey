import { useGlobalState } from "../context/GlobalState";

function Flag() {
  const { country } = useGlobalState();

  return (
    <div className="h-[150%] aspect-square py-2 px-4 bg-slate-200 rounded-full flex flex-col justify-center items-center container-border shadow-customShadow absolute right-0 translate-x-[50%]">
      <img
        src={`/flags/${country.flag}`}
        alt={`${country.name} flag`}
        className="w-full"
      />
    </div>
  );
}

export default Flag;
