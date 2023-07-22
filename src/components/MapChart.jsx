import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

import { useGlobalState } from "../context/GlobalState";

/* import geoUrl from "../data/world/map.json"; */

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

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-white w-full max-[833px]:w-[150%]">{/*  max-[569px]:w-[200%] max-[417px]:w-[300%] */}
        <ComposableMap data-tip="">
          <ZoomableGroup
            center={center}
            zoom={zoom}
            minZoom={minZoom}
            maxZoom={12}
          >
            <Geographies geography={jsonMap}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    stroke="#000"
                    strokeWidth={strokeWidth}
                    className={
                      countriesGuessed.includes(geo.id)
                        ? "fill-correct map-chart-element"
                        : countriesSkipped.includes(geo.id)
                        ? "fill-wrong map-chart-element"
                        : "hover:fill-[#F53] fill-[#27c3cb] map-chart-element"
                    }
                    onClick={() => {
                      if (geo.id == country.alpha3Code) {
                        setCountriesGuessed(
                          countriesGuessed.concat(country.alpha3Code)
                        );
                        setCountriesPlayed(
                          countriesPlayed.concat(country.alpha3Code)
                        );
                      } else if (
                        countriesLen != countriesPlayed.length &&
                        !countriesPlayed.includes(geo.id)
                      ) {
                        setCountriesPlayed(
                          countriesPlayed.concat(country.alpha3Code)
                        );
                        setCountriesSkipped(
                          countriesSkipped.concat(country.alpha3Code)
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
