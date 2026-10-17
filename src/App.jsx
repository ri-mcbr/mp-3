import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Education from "./pages/Education";
import Experiences from "./pages/Experiences";
import Certifications from "./pages/Certifications";
import Achievements from "./pages/Achievements";
import Projects from "./pages/Projects";

function Root() {
    return (
        <div id="page-wrapper">
            <Header />
            <div id="container">
                <Nav />
                <Main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/experiences" element={<Experiences />} />
                        <Route path="/achievements" element={<Achievements />} />
                        <Route path="/certifications" element={<Certifications />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </Main>
            </div>
            <Footer />
        </div>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    );
}
