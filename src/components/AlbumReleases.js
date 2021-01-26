// src/components/AlbumReleases.js
import { Link } from "@reach/router";

export default function AlbumReleases({img, album, artist, amount}) {
    return (
        <Link to="/songs" className="albumReleases__card">
            <img src={img} alt=""  />
            <div className="albumReleases__cardInfo">
                <h2>{album}</h2>
                <p>{artist}</p>
            </div>
            <p className="albumReleases__cardSongAmount">{amount}</p>
        </Link>
    )
}
