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

function App() {
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
                jsonData={worldMap}
                center={[6, -32]}
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
                jsonData={americasMap}
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
                jsonData={asiaMap}
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
                jsonData={europeMap}
                center={[15, 39]}
                zoom={3.3}
                minZoom={3.2}
                strokeWidth={0.19}
              />
            }
          />
          <Route
            path="/geographey/africa"
            element={
              <MainContainer
                jsonData={africaMap}
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
