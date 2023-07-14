import { Tooltip } from "react-tooltip";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

import { useGlobalState } from "../context/GlobalState";

import geoUrl from "../data/countries-map.json";

/* const geoUrl =
    "https://raw.githubusercontent.com/MateoMor/topojson/main/world-countries-sans-antarctica-some-changes.json"; */

/* const anotherURl = "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/africa.json" */

function MapChart() {
  const {
    country,
    setCountriesGuessed,
    countriesGuessed,
    setCountriesPlayed,
    countriesPlayed,
    countriesSkipped,
  } = useGlobalState();

  return (
    <div className="flex flex-col justify-center items-center">
      <Tooltip id="tooltip" />

      <div className="bg-white w-full">
        <ComposableMap data-tip="">
          <ZoomableGroup center={[6, -32]} zoom={0.85}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    data-tooltip-id="tooltip"
                    data-tooltip-content={geo.properties.name} /* {content} */
                    data-tooltip-place="top"
                    data-tooltip-float="true"
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
                    onClick={(e) => {
                      if (geo.id == country.alpha3Code) {
                        setCountriesGuessed(
                          countriesGuessed.concat(country.alpha3Code)
                        );
                        setCountriesPlayed(
                          countriesPlayed.concat(country.alpha3Code)
                        );
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
