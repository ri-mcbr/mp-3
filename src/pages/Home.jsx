import {Link} from "react-router-dom";
import oceanView from "../assets/me.png";

function Home() {
    return (
        <>
            <h2>
                Home
            </h2>
            <img src={oceanView} alt="a copyright-free ocean view"/>
            <p>
                Howdy. My name is <strong>Riley</strong>, and what you see before you is a website
                encapsulating a barebones resume which contains a handful of information about myself,
                in addition to some things that I've been involved in over the many years. Beyond that,
                there's also a neat calculator 'mini-application' located on the <Link to="/projects">Projects</Link> page,
                which is sure to give Texas Instrument and their humble TI-84 a run for their money.<br/><br/>
                With that being said, take a look around and have a good time doing so.
            </p>
        </>
    );
}

export default Home;
