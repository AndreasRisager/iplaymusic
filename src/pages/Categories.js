// src/pages/Categories.js
import "./Categories.scss";
import Primarynav from "../components/Primarynav";
import Menu from "../components/Menu";
import CategorySubItem from "../components/CategorySubItem";
import CategoryItem from "../components/CategoryItem";

export default function Categories() {
    return (
        <>
        <Primarynav page="categories"/>
        <main className="categories">
            <h1 className="gradientHeading">Categories</h1>
            <div className="categoryItems">
                <CategoryItem genre="Alternative" color="#D70060"></CategoryItem>
                <CategoryItem genre="Blues" color="#E54028">
                    <CategorySubItem>Acoustic Blues</CategorySubItem>
                    <CategorySubItem>Blues Rock</CategorySubItem>
                    <CategorySubItem>Canadian Blues</CategorySubItem>
                    <CategorySubItem>Jazz Blues</CategorySubItem>
                    <CategorySubItem>Piano Blues</CategorySubItem>
                    <CategorySubItem>Soul Blues</CategorySubItem>
                    <CategorySubItem>Swamp Blues</CategorySubItem>
                </CategoryItem>
                <CategoryItem genre="Classical" color="#F18D05"></CategoryItem>
                <CategoryItem genre="Country" color="#F2BC06"></CategoryItem>
                <CategoryItem genre="Dance" color="#5EB11C"></CategoryItem>
                <CategoryItem genre="Electronic" color="#3A7634"></CategoryItem>
                <CategoryItem genre="Fitness &amp; Workout" color="#0ABEBE"></CategoryItem>
                <CategoryItem genre="Hip-Hop/Rap" color="#00A1CB"></CategoryItem>
                <CategoryItem genre="Industrial" color="#115793"></CategoryItem>
            </div>
        </main>
        <Menu categories="#000000"/>
        </>
    )
}
