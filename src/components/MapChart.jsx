import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

import { Tooltip } from "react-tooltip";

import geoUrl from "../data/countries-map.json";

/* const geoUrl =
    "https://raw.githubusercontent.com/MateoMor/topojson/main/world-countries-sans-antarctica-some-changes.json"; */

/* const anotherURl = "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/africa.json" */

function MapChart() {
  /* const [content, setContent] = useState(""); */

  return (
    <div className="flex flex-col justify-center items-center ">
      <Tooltip id="tooltip" />

      <div className="border-2  bg-white w-full ">
        <ComposableMap data-tip="">
          <ZoomableGroup center={[6, -32]} zoom={0.85}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    data-tooltip-id="tooltip"
                    data-tooltip-content={geo.id} /* {content} */
                    data-tooltip-place="top"
                    data-tooltip-float="true"
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#0092CA"
                    className="hover:fill-[#F53]"
                    // available props: id, properties : {name, ["Alpha-2"]}
                    onClick={() =>
                      (document.getElementById("gameContainer").textContent =
                        document.getElementById("gameContainer").textContent +
                        ", " +
                        geo.properties.name)
                    }
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
