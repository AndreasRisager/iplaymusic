// src/components/Menu.js
import { Link } from "@reach/router";
import "./Menu.scss";

export default function Menu({albums, playlists, featured, theme, categories}) {
    
    return (
        <nav className="Menu">
            <Link to="/albums">
                <ion-icon name="pulse" style={{color: albums}}></ion-icon>
            </Link>
            <Link to="/playlists">
                <ion-icon name="mic" style={{color: playlists}}></ion-icon>
            </Link>
            <Link to="/featured" className="Menu__featured">
                <ion-icon name="radio" style={{color: featured}}></ion-icon>
            </Link>
            <Link to="?dark">
                <ion-icon name="contrast" style={{color: theme}}></ion-icon>
            </Link>
            <Link to="/categories">
                <ion-icon name="albums" style={{color: categories}}></ion-icon>
            </Link>
        </nav>
    );
}
