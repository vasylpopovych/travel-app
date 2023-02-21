/* eslint-disable no-undef */
import Router from "./components/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Router />
            </BrowserRouter>
        </>
    );
}

export default App;
