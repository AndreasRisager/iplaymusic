// src/components/Primarynav.js
import "./Primarynav.scss";
import { Link } from "@reach/router";

export default function Primarynav({page, color, search}) {

    var searchIcon = <Link to="/"><i className="fas fa-search"></i></Link>;

    if (search === "false") {
        searchIcon = '';
    }
    return (
        <header className="Primarynav" style={{color: color}}>
            <ul>
                <li>
                    <Link to="/"><i className="fas fa-chevron-left"></i></Link>
                </li>
                <li>
                    {page}
                </li>
                <li>
                    {searchIcon}
                </li>
            </ul>
        </header>
    )
}
