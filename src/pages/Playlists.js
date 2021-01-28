// src/pages/Playlists.js
import Menu from "../components/Menu";
import Primarynav from "../components/Primarynav";
import Song from "../components/Song";
import "./Playlists.scss";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";

export default function Playlists(props) {
    var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});
    var playlist_id = props.id;

    useEffect(function() {
        axios.get(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks?limit=50`, {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(response => setContent(response.data));
    }, [token, playlist_id, setContent])

    return (
        <>
            <main className="playlists">
            <header className="playlistsHeader">
                <img src="../images/slimey.png" alt=""/>
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
                {content.items && content.items.map(function(result) {
                    var songLength = (result.track.duration_ms / 1000) / 60;

                    return (
                        <Song song={result.track.name} artist={result.track.artists[0].name} length={songLength.toFixed(2)} id={result.track.id} key={result.track.id} />
                    );
                })}
                <button className="songs__more">Listen All</button>
            </section>
            </main>
            <Menu playlists="#222" />
        </>
    )
}
