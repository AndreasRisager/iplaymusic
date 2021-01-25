// src/pages/Album.js
import "./Album.scss";
import Primarynav from "../components/Primarynav";
import { Link } from "@reach/router";
import Song from "../components/Song";
import Menu from "../components/Menu";

export default function Album() {
    return (
        <>
        <main className="album">
            <header className="albumHeader">
                <img src="./images/old-town-road.jpg" alt=""/>
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
            <section className="album__songs">
                <h3 className="album__songsHeader">All Songs</h3>
                <div className="songs">
                    <Song song="Old Town Road" artist="Billy Ray Cyrus" length="3 : 58"  />
                    <Song song="don't call me up" artist="Mabel" length="2 : 46"  />
                    <Song song="let me down slowly" artist="Alec Benjamin" length="3 : 58"  />
                    <Song song="paradise" artist="Brazzi" length="2 : 32"  />
                    <Song song="sucker" artist="Jonas Brothers" length="1 : 55"  />
                    <Song song="kill this love" artist="BLACKPINK" length="2 : 43"  />
                </div>
            </section>
        </main>
        <Menu />
        </>
    )
}
