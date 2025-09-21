import "./App.css";
import IntroScreen from "./Components/Loading Page/IntroScreen.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TrackWebsites from "./Components/Pages/TrackWebsites.tsx";
import TechNews from "./Components/Pages/SeparateWebSites/TechNews.tsx";
import ReadmeLk from "./Components/Pages/SeparateWebSites/ReadmeLk.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IntroScreen />} />
                <Route path="/websites" element={<TrackWebsites />} />
                <Route path ='/TechNews' element={<TechNews/>}/>
                <Route path= '/ReadmeLk' element={<ReadmeLk/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
