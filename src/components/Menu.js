// src/components/Menu.js
import { Link } from "@reach/router";
import "./Menu.scss";

export default function Menu() {
    return (
        <nav className="Menu">
            <Link to="/albums">
                <img src="./images/albums.svg" alt=""/>
            </Link>
            <Link to="/playlists">
                <img src="./images/playlists.svg" alt=""/>
            </Link>
            <Link to="/">
                <img src="./images/featured.svg" alt=""/>
            </Link>
            <Link to="?dark">
                <img src="./images/tema.svg" alt=""/>
            </Link>
            <Link to="/categories">
                <img src="./images/categories.svg" alt=""/>
            </Link>
        </nav>
    );
}
