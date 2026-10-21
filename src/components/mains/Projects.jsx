import Calculator from "../Calculator.jsx";
import {Link} from "react-router-dom";

function Projects() {
    return (
        <>
            <title>Projects | Riley's Resume</title>
            <h2>
                Projects
            </h2>
            <p>Here's a list of projects I've been involved in, along with the ever-so
                enticing <strong>calculator</strong> mentioned on the <Link to="/">Home</Link> page:</p>
            <ul>
                <li className="top-item">London Social Media Event Tracker</li>
                <ul>
                    <li>London Study Abroad</li>
                    <li>Managed and coordinated with team of 3 to produce on-time deliverables</li>
                    <li>Utilized Django for backend/frontend function and account handling</li>
                </ul>
            </ul>
            <h2>
                Calculator
            </h2>
            <p>Behold... <strong>The Calculator</strong>. in all of it's <i>calculating</i> glory.</p>
            <Calculator/>
        </>
    );
}

export default Projects;
