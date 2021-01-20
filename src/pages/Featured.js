// src/pages/Featured.js
import "./Featured.scss";
import Primarynav from "../components/Primarynav";
// import { Link } from "@reach/router";
import Featuredcard from "../components/Featuredcard";

export default function Featured() {
    return (
        <>
            <Primarynav page="featured"/>
            <main className="featured">
                <h1 className="gradientHeading">Featured</h1>
                <div className="featuredcards">
                    <Featuredcard img="https://via.placeholder.com/325x425" heading="The Greatest Showman" label="Soundtrack"/>
                    <Featuredcard img="https://via.placeholder.com/325x425" heading="The Greatest Showman" label="Soundtrack"/>
                </div>
            </main>
        </>
    )
}
