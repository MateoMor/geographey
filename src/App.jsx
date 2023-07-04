import { disablePageScroll } from "scroll-lock";

import MainContainer from "./containers/MainContainer";
import { GlobalProvider } from "./context/GlobalState";

disablePageScroll();

function App() {
    return (
        <div>
            <GlobalProvider>
                <MainContainer />
            </GlobalProvider>
        </div>
    );
}

export default App;
