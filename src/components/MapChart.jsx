import React, { useState } from "react";

import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
} from "react-simple-maps";

import { Tooltip } from "react-tooltip";

const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

function MapChart() {
    const [content, setContent] = useState("");

    return (
        <div className=" w-[100%] h-[100%] flex flex-col justify-center items-center">
            <Tooltip id="tooltip" />

            <div className="border-double border-black border-2 w-[69%] ">
                <ComposableMap data-tip="">
                    <ZoomableGroup zoom={1}>
                        <Geographies geography={geoUrl}>
                            {({ geographies }) =>
                                geographies.map((geo) => (
                                    <Geography
                                        data-tooltip-id="tooltip"
                                        data-tooltip-content={content}
                                        data-tooltip-place="top"
                                        data-tooltip-float="true"
                                        key={geo.rsmKey}
                                        geography={geo}
                                        onMouseEnter={() => {
                                            const { name } = geo.properties;
                                            setContent(`${name}`);
                                        }}
                                        onMouseLeave={() => {
                                            setContent("");
                                        }}
                                        fill="#0092CA"
                                        className="hover:fill-[#F53]"
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
