import { Link } from "@reach/router";

// src/components/CategoryItem.js
export default function CategoryItem({genre, id}) {
    return (
        <>
            <Link to={"/categories/" + id}>
                <div className="category__name">
                    <h2>{genre}</h2>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </Link>
        </>
    )
}
