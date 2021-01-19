// src/components/Primarynav.js
import "./Primarynav.css";
import { Link } from "@reach/router";

export default function Primarynav({page}) {
    return (
        <header className="Primarynav">
            <ul>
                <li>
                    <Link to="/"><i className="fas fa-chevron-left"></i></Link>
                </li>
                <li>
                    {page}
                </li>
                <li>
                    <Link to="/"><i className="fas fa-search"></i></Link>
                </li>
            </ul>

        </header>
    )
}
