// src/components/Menu.js
import { Link } from "@reach/router";
import "./Menu.scss";

export default function Menu() {
    return (
        <nav className="Menu">
            <Link to="/albums">
                <ion-icon name="pulse"></ion-icon>
            </Link>
            <Link to="/playlists">
                <ion-icon name="mic"></ion-icon>
            </Link>
            <Link to="/" className="Menu__featured">
                <ion-icon name="radio"></ion-icon>
            </Link>
            <Link to="?dark">
                <ion-icon name="contrast"></ion-icon>
            </Link>
            <Link to="/categories">
                <ion-icon name="albums"></ion-icon>
            </Link>
        </nav>
    );
}
