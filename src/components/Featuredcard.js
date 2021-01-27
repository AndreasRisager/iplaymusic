// src/components/Featuredcard.js
import { Link } from "@reach/router";

export default function Featuredcard({img, heading, label, id}) {
    return (
        <Link to={"/playlists?id=" + id} className="featuredcard" >
            <img src={img} alt="" className="featuredcard__image"/>
            <div className="fadedgradient"></div>
            <div className="featuredcard__text">
                <h2>{heading}</h2>
                <p>{label}</p>
            </div>
        </Link>
    )
}
