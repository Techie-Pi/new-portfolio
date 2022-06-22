import "./index.css";

import {BrowserRouter, Route, Routes} from "react-router-dom";

import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
    return (
        <div className="App min-h-[100vh]">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Landing/>}/>
                    <Route exact path="/projects" element={<Projects/>}/>
                    <Route exact path="/contact" element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
