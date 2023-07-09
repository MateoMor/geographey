import { useGlobalState } from "../context/GlobalState";

function CountryName() {
  const { country } = useGlobalState();
  return (
    <div className="flex bg-mainColor h-full w-[55%] justify-center items-center rounded-l-2xl pr-[50px]">
        <p className="font-semibold font-sans break-words text-center">{country.name}</p>
    </div>
  );
}

export default CountryName;
