import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

import { useGlobalState } from "../context/GlobalState";

import geoUrl from "../data/countries-map.json";

function MapChart() {
  const {
    country,
    setCountriesGuessed,
    countriesGuessed,
    setCountriesPlayed,
    countriesPlayed,
    countriesSkipped,
    setCountriesSkipped,
    setAttemp,
    attemp,
    countriesLen
  } = useGlobalState();

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-white w-full">
        <ComposableMap data-tip="">
          <ZoomableGroup center={[6, -32]} zoom={0.85}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    stroke="#000"
                    strokeWidth={0.4}
                    className={
                      countriesGuessed.includes(geo.id)
                        ? "fill-correct"
                        : countriesSkipped.includes(geo.id)
                        ? "fill-wrong"
                        : "hover:fill-[#F53] fill-[#27c3cb]"
                    }
                    onClick={() => {
                      if (geo.id == country.alpha3Code) {
                        setCountriesGuessed(
                          countriesGuessed.concat(country.alpha3Code)
                        );
                        setCountriesPlayed(
                          countriesPlayed.concat(country.alpha3Code)
                        );
                        setAttemp(true);
                      } else if (attemp) {
                        setAttemp(false);
                      } else if (countriesLen != countriesPlayed.length){
                        setCountriesPlayed(
                          countriesPlayed.concat(country.alpha3Code)
                        );
                        setCountriesSkipped(
                          countriesSkipped.concat(country.alpha3Code)
                        );
                        setAttemp(true);
                      }
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
}

export default MapChart;
