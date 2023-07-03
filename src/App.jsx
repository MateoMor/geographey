import MainContainer from "./containers/MainContainer";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

disablePageScroll();

function App() {
    return (
        <div>
            <MainContainer />
        </div>
    );
}

export default App;
