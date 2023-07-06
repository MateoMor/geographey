import { useGlobalState } from "../context/GlobalState";

function Info() {
  const { country } = useGlobalState();
  return (
    <div className="flex h-[70%] w-full bg-gcPadding justify-center items-center border-b-2 border-r-2 border-gcBorder pointer-events-auto  rounded-br-md">
      <p>{country.name}</p>
    </div>
  );
}

export default Info;
