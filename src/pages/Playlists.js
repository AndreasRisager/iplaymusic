// src/pages/Playlists.js
import Menu from "../components/Menu";
import Primarynav from "../components/Primarynav";
import Song from "../components/Song";
import "./Playlists.scss";

export default function Playlists() {
    return (
        <>
            <main className="playlists">
            <header className="playlistsHeader">
                <img src="./images/slimey.png" alt=""/>
                <div className="playlistsHeader__content">
                    <Primarynav page="playlists" color="#FFF" />
                    <div className="playlistsHeader__contentSlider">
                        <h1>Playlists</h1>
                        <div className="slider-container">
                            <div className="slider-images">
                                <img src="https://via.placeholder.com/155" alt=""/>
                                <img src="https://via.placeholder.com/155" alt=""/>
                                <img src="https://via.placeholder.com/155" alt=""/>
                            </div>
                            <h2 className="slider-caption">Top 50</h2>
                            <h2 className="slider-caption">Rock Ballads</h2>
                        </div>
                    </div>
                </div>
            </header>
            <section className="songs">
                <Song song="Old Town Road" artist="Billy Ray Cyrus" length="3 : 58"  />
                <Song song="Old Town Road" artist="Billy Ray Cyrus" length="3 : 58"  />
                <Song song="Old Town Road" artist="Billy Ray Cyrus" length="3 : 58"  />
                <Song song="Old Town Road" artist="Billy Ray Cyrus" length="3 : 58"  />
                <Song song="Old Town Road" artist="Billy Ray Cyrus" length="3 : 58"  />
                <Song song="Old Town Road" artist="Billy Ray Cyrus" length="3 : 58"  />
                <Song song="Old Town Road" artist="Billy Ray Cyrus" length="3 : 58"  />
                <Song song="Old Town Road" artist="Billy Ray Cyrus" length="3 : 58"  />
                <button className="songs__more">Listen All</button>
            </section>
            </main>
            <Menu playlists="#222" />
        </>
    )
}
