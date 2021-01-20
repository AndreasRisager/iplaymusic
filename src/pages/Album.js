// src/pages/Album.js
import "./Album.scss";
import Primarynav from "../components/Primarynav";
import { Link } from "@reach/router";

export default function Album() {
    return (
        <>
        <main className="album">
            <header className="albumHeader">
                <img src="./images/album/old-town-road.jpg" alt=""/>
                <div className="albumHeader__content">
                    <Primarynav page="album" color="#FFF" search="false"/>
                    <div className="albumHeader__contentText">
                        <div>
                            <h2>Old Town Road</h2>
                            <h3>12 Songs</h3>
                        </div>
                        <div>
                            <h4 className="genres">Genres hashtags</h4>
                            <Link to="/search?country" className="hashtag">#country</Link>
                            <Link to="/search?country+road" className="hashtag">#country road</Link>
                        </div>
                    </div>
                </div>
            </header>
        </main>
        </>
    )
}
