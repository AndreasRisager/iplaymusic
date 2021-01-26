// src/components/CategorySubItem.js
import { Link } from "@reach/router";

export default function CategorySubItem({children}) {
    return (
        <Link to="/" className="category__listItem">
            {children}
            <i className="fas fa-chevron-right"></i>
        </Link>
    )
}
