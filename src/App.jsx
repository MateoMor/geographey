import { disablePageScroll } from "scroll-lock";
import { Routes, Route } from "react-router-dom";

import MainContainer from "./containers/MainContainer";
import { GlobalProvider } from "./context/GlobalState";
import Default from "./pages/Default";
import Header from "./pages/Header";
import Home from "./pages/Home";

disablePageScroll();

function App() {
  return (
    <>
      <GlobalProvider>
        <MainContainer />

        {/* <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Home />} />
            {<Route path="*" element={<Default />} />}
          </Route>
        </Routes> */}
      </GlobalProvider>
    </>
  );
}

export default App;
