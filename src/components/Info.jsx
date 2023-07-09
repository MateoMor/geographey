import { useGlobalState } from "../context/GlobalState";

function Info() {
  const { countriesPlayed, countriesLen } = useGlobalState();

  return (
    <div className="w-[45%] flex justify-center">
      <p>{`${countriesPlayed.length}/${countriesLen}`}</p>
    </div>
  );
}

export default Info;
