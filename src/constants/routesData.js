import worldMap from "../data/world/world-map.json";
import americasMap from "../data/americas/americas-map.json";
import asiaMap from "../data/asia/asia-map.json";
import europeMap from "../data/europe/europe-map.json";
import africaMap from "../data/africa/africa-map.json";

import worldData from "../data/world/world-data.json";
import americasData from "../data/americas/americas-data.json";
import africaData from "../data/africa/africa-data.json";
import asiaData from "../data/asia/asia-data.json";
import europeData from "../data/europe/europe-data.json";

import { mainPath } from "../constants/appData";

// Información de los mapas
export const mapData = [
  {
    path: "world",
    jsonMap: worldMap,
    jsonData: worldData,
    center: [6, -32],
    tabletCenter: [6, -32],
    mobileCenter: [6, -32],
    zoom: 0.85,
    minZoom: 0.8,
    strokeWidth: 0.4,
  },
  {
    path: "americas",
    jsonMap: americasMap,
    jsonData: americasData,
    center: [-80, -32],
    zoom: 0.85,
    minZoom: 0.85,
    strokeWidth: 0.4,
  },
  {
    path: "asia",
    jsonMap: asiaMap,
    jsonData: asiaData,
    center: [105, -32],
    zoom: 0.85,
    minZoom: 0.85,
    strokeWidth: 0.4,
  },
  {
    path: "europe",
    jsonMap: europeMap,
    jsonData: europeData,
    center: [10, -32],
    zoom: 0.85,
    minZoom: 0.85,
    strokeWidth: 0.4,
  },
  {
    path: "africa",
    jsonMap: africaMap,
    jsonData: africaData,
    center: [-10, -32],
    zoom: 0.85,
    minZoom: 0.85,
    strokeWidth: 0.4,
  },
];


// Información de lo paths
export const pathData = [
  {
    to: "world",
    name: "World",
    imgPath: `${mainPath}maps-images/world.svg`,
  },
  {
    to: "americas",
    name: "Americas",
    imgPath: `${mainPath}maps-images/americas.svg`,
  },
  {
    to: "asia",
    name: "Asia",
    imgPath: `${mainPath}maps-images/asia.svg`,
  },
  {
    to: "europe",
    name: "Europe",
    imgPath: `${mainPath}maps-images/europe.svg`,
  },
  {
    to: "africa",
    name: "Africa",
    imgPath: `${mainPath}maps-images/africa.svg`,
  },
];
