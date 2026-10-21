import { Routes, Route } from "react-router-dom";

import Header from "./Header.jsx";
import Nav from "./Nav.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";

import Home from "./mains/Home.jsx";
import Education from "./mains/Education.jsx";
import Experiences from "./mains/Experiences.jsx";
import Certifications from "./mains/Certifications.jsx";
import Achievements from "./mains/Achievements.jsx";
import Projects from "./mains/Projects.jsx";

export default function Root() {
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
                        <Route path="/certifications" element={<Certifications />} />
                        <Route path="/achievements" element={<Achievements />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </Main>
            </div>

            <Footer />
        </div>
    );
}