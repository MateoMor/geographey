import { Routes, Route } from "react-router-dom";

import MainContainer from "./containers/MainContainer";
import { GlobalProvider } from "./context/GlobalState";
import Default from "./pages/Default";
import Header from "./pages/Header";
import Home from "./pages/Home";

import worldMap from "./data/world/world-map.json";
import americasMap from "./data/americas/americas-map.json";
import asiaMap from "./data/asia/asia-map.json";
import europeMap from "./data/europe/europe-map.json";
import africaMap from "./data/africa/africa-map.json";

import worldData from "./data/world/world-data.json";
import americasData from "./data/americas/americas-data.json";
import africaData from "./data/africa/africa-data.json";
import asiaData from "./data/asia/asia-data.json";
import europeData from "./data/europe/europe-data.json";
import { useEffect, useState } from "react";

function App() {

  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    
    
    // Función que maneja el evento orientationchange
    const handleOrientationChange = () => {
      
      setIsRotated(!isRotated);
    };

    // Agregar el evento al cargar el componente
    window.addEventListener('orientationchange', handleOrientationChange);

    // Eliminar el evento al desmontar el componente para evitar memory leaks
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [isRotated]);

  return (
    <>
      <GlobalProvider>
        <Routes>
          <Route path="/geographey" element={<Header />}>
            <Route path="/geographey" element={<Home />} />
            {<Route path="*" element={<Default />} />}
          </Route>
          <Route
            path="/geographey/world"
            element={
              <MainContainer
                jsonMap={worldMap}
                jsonData={worldData}
                center={[6, -32]}
                tabletCenter={[6, -32]}
                mobileCenter={[6, -32]}
                zoom={0.85}
                minZoom={0.8}
                strokeWidth={0.4}
              />
            }
          />
          <Route
            path="/geographey/americas"
            element={
              <MainContainer
                jsonMap={americasMap}
                jsonData={americasData}
                center={[-80, -32]}
                zoom={0.85}
                minZoom={0.85}
                strokeWidth={0.4}
              />
            }
          />
          <Route
            path="/geographey/asia"
            element={
              <MainContainer
                jsonMap={asiaMap}
                jsonData={asiaData}
                center={[74, 1]}
                zoom={1.3}
                minZoom={1.2}
                strokeWidth={0.3}
              />
            }
          />
          <Route
            path="/geographey/europe"
            element={
              <MainContainer
                jsonMap={europeMap}
                jsonData={europeData}
                center={[15, 39]}
                zoom={3.3}
                minZoom={3.2}
                strokeWidth={0.16}
              />
            }
          />
          <Route
            path="/geographey/africa"
            element={
              <MainContainer
                jsonMap={africaMap}
                jsonData={africaData}
                center={[16, -22]}
                zoom={1.4}
                minZoom={1.3}
                strokeWidth={0.4}
              />
            }
          />
        </Routes>
      </GlobalProvider>
    </>
  );
}

export default App;
