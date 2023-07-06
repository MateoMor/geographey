import { useGlobalState } from "../context/GlobalState";

function Flag() {
  const { country, flag } = useGlobalState();

  return (
    <div className="h-full py-2 px-4 bg-gcPadding outline-gcBorder outline-2 outline rounded-b-md pointer-events-auto  ">
      <img src={flag} alt={`${country.name} flag`} className="h-full" />
    </div>
  );
}

export default Flag;
