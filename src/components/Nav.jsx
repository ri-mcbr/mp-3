import {Link} from "react-router-dom";

function Nav() {
    const links = [
        { name: "Home", path: "/" },
        { name: "Education", path: "/education" },
        { name: "Experiences", path: "/experiences" },
        { name: "Certifications", path: "/certifications" },
        { name: "Achievements", path: "/achievements" },
        { name: "Projects", path: "/projects" },
    ];

    return (
        <nav>
            <ul>
                <li><Link to="/" element={"<Home />"}>Home</Link></li>
                <li><Link to="/education" element={"<Education />"}>Education</Link></li>
                <li><Link to="/experiences" element={"<Experiences />"}>Experiences</Link></li>
                <li><Link to="/certifications" element={"<Certifications />"}>Certifications</Link></li>
                <li><Link to="/achievements" element={"<Achievements />"}>Achievements</Link></li>
                <li><Link to="/projects" element={"<Projects />"}>Projects</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
