// src/components/CategorySubItem.js
import { Link } from "@reach/router";

export default function CategorySubItem({children, id}) {
    return (
        <Link to={"/playlists/" + id} className="category__subItem">
            {children}
            <i className="fas fa-chevron-right"></i>
        </Link>
    )
}
