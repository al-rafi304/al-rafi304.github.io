import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Navbar from "./components/Navbar";
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <div className="container mx-auto mt-14 px-8 max-w-4xl">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>} />
                </Routes>
            </div>
            {/* <Footer /> */}
        </Router>
    )
}

export default App
