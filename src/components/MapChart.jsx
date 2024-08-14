import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

import { useGlobalState } from "../context/GlobalState";

function MapChart({ jsonMap, center, zoom, minZoom, strokeWidth }) {
  const {
    country,
    setCountriesGuessed,
    countriesGuessed,
    setCountriesPlayed,
    countriesPlayed,
    countriesSkipped,
    setCountriesSkipped,
    countriesLen,
  } = useGlobalState();

  function handleClickOnElement(geoJsonElement) {
    if (geoJsonElement.id == country.alpha3Code) {
      setCountriesGuessed(
        countriesGuessed.concat(country.alpha3Code)
      );
      setCountriesPlayed(
        countriesPlayed.concat(country.alpha3Code)
      );
    } else if (
      countriesLen != countriesPlayed.length &&
      !countriesPlayed.includes(geoJsonElement.id)
    ) {
      setCountriesPlayed(
        countriesPlayed.concat(country.alpha3Code)
      );
      setCountriesSkipped(
        countriesSkipped.concat(country.alpha3Code)
      );
    }
  }

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="bg-white w-full max-[833px]:w-[150vw] max-[569px]:w-[200vw] max-[417px]:w-[290vw]">
        <ComposableMap data-tip="">
          <ZoomableGroup
            center={center}
            zoom={zoom}
            minZoom={minZoom}
            maxZoom={12}
          >
            <Geographies geography={jsonMap}>
              {({ geographies }) =>
                geographies.map((geoJsonElement) => (
                  <Geography
                    key={geoJsonElement.rsmKey}
                    geography={geoJsonElement}
                    stroke="#000"
                    strokeWidth={strokeWidth}
                    className={
                      countriesGuessed.includes(geoJsonElement.id)
                        ? "fill-correct map-chart-element"
                        : countriesSkipped.includes(geoJsonElement.id)
                        ? "fill-wrong map-chart-element"
                        : "hover:fill-[#F53] fill-[#27c3cb] map-chart-element"
                    }
                    onClick={() => handleClickOnElement(geoJsonElement)}
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
