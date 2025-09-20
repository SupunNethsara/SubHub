import "./App.css";
import IntroScreen from "./Components/Loading Page/IntroScreen.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TrackWebsites from "./Components/Pages/TrackWebsites.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IntroScreen />} />
                <Route path="/websites" element={<TrackWebsites />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
