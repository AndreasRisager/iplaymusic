// src/components/CategoryItem.js
export default function CategoryItem({children, genre, color}) {
    return (
        <div className="category">
            <button className="category__name" style={{backgroundColor: color}}>
                <h2>{genre}</h2>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </button>
            <div className="category__list">
                {children}
            </div>
        </div>
    )
}
