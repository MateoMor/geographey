import { HiChevronDoubleRight } from "react-icons/hi";
import { useGlobalState } from "../../context/GlobalState";

function SkipButton() {
  const {
    country,
    setCountriesSkipped,
    countriesSkipped,
    setCountriesPlayed,
    countriesPlayed,
  } = useGlobalState();

  return (
    <button
      className="button bg-[#DA3648]"
      onClick={() => {
        if (countriesPlayed[countriesPlayed.length - 1] != country.alpha3Code) {
          setCountriesSkipped(countriesSkipped.concat(country.alpha3Code));
          setCountriesPlayed(countriesPlayed.concat(country.alpha3Code));   
        }
      }}
    >
      <HiChevronDoubleRight size="50%" />
    </button>
  );
}

export default SkipButton;
