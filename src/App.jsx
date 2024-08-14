import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import MainContainer from "./containers/MainContainer";
import { GlobalProvider } from "./context/GlobalState";
import Default from "./pages/Default";
import Header from "./pages/Header";
import Home from "./pages/Home";

import {mapData} from "./constants/routesData";
import { mainPath } from "./constants/appData";

function App() {

  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    
    
    // Función que maneja el evento orientationChange
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
          {/* Ruta principal */}
          <Route path={mainPath} element={<Header />}>
            <Route path={mainPath} element={<Home />} />
            {<Route path="*" element={<Default />} />}
          </Route>

          {/* Rutas de los mapas */}
          {mapData.map((route, index) => (
            <Route
              key={index}
              path={mainPath + route.path}
              element={
                <MainContainer
                  jsonMap={route.jsonMap}
                  jsonData={route.jsonData}
                  center={route.center}
                  zoom={route.zoom}                  minZoom={route.minZoom}
                  strokeWidth={route.strokeWidth}
                />
              }
            />
          ))}
        </Routes>
      </GlobalProvider>
    </>
  );
}

export default App;
