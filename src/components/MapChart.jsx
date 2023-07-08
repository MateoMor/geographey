import { Tooltip } from "react-tooltip";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

import { useGlobalState } from "../context/GlobalState";

import geoUrl from "../data/countries-map.json";

/* const geoUrl =
    "https://raw.githubusercontent.com/MateoMor/topojson/main/world-countries-sans-antarctica-some-changes.json"; */

/* const anotherURl = "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/africa.json" */

function MapChart() {
  const {
    setCounter,
    counter,
    country,
    setCountriesGuessed,
    countriesGuessed,
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
                        ? "fill-[#178600]"
                        : "hover:fill-[#F53] fill-[#27c3cb]"
                    }
                    onClick={(e) => {
                      if (geo.id == country.alpha3Code) {
                        setCountriesGuessed(
                          countriesGuessed.concat(country.alpha3Code)
                        );

                        setCounter(counter + 1);
                      } else {
                        console.log(country.alpha3Code);
                      }
                    }}
                    /* onMouseEnter={() => {
                                            const { name } = geo.properties;
                                            setContent(`${name}`);
                                        }}
                                        onMouseLeave={() => {
                                            setContent("");
                                        }} */
                  />
                ))
              }
            </Geographies>
            {/* <Annotation
                            subject={[1.5218, 42.5063]}
                            dx={-90}
                            dy={-30}
                            curve={0.5}
                            connectorProps={{
                                stroke: "#FF5933",
                                strokeWidth: 1,
                                strokeLinecap: "round",
                            }}
                        >
                            <text
                                x="-8"
                                textAnchor="end"
                                alignmentBaseline="middle"
                                fill="#F53"
                            >
                                {"Andorra"}
                            </text>
                        </Annotation> */}
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
}

export default MapChart;
