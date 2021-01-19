// src/pages/Featured.js
import "./Featured.css";
import Primarynav from "../components/Primarynav";
// import { Link } from "@reach/router";

export default function Featured() {
    return (
        <main className="featured">
            <Primarynav page="featured"/>
            <h1 className="gradientHeading">Featured</h1>
            <div className="featuredcards">
                <div className="featuredcard">
                    <img src="./images/featured/the-greatest-showman.jpg" alt="the greatest showman"/>
                    <h2>The Greatest Showman</h2>
                    <p>Soundtrack</p>
                </div>
            </div>
        </main>
    )
}
