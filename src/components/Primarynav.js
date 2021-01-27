// src/components/Primarynav.js
import "./Primarynav.scss";

export default function Primarynav({page, color, search}) {

    var searchIcon = <i className="fas fa-search"></i>;
    if (search === "false") {
        searchIcon = '';
    }
    return (
        <header className="Primarynav" style={{color: color}}>
            <ul>
                <li>
                    <i className="fas fa-chevron-left" onClick={()=> window.history.back()}></i>
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
