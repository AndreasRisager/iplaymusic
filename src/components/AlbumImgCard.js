// src/components/AlbumImgCard.js
import { Link } from "@reach/router";

export default function AlbumImgCard({img}) {
    return (
        <Link to="/">
            <img src={img} alt=""/>
        </Link>
    )
}
