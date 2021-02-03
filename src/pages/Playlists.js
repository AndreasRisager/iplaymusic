// src/pages/Playlists.js
import Menu from "../components/Menu";
import Primarynav from "../components/Primarynav";
import Song from "../components/Song";
import "./Playlists.scss";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";
import { Link } from "@reach/router";
import TimeCovert from "../TimeCovert";

export default function Playlists(props) {
    var [token] = useContext(TokenContext);
    var [playlist, setPlaylist] = useState({});
    var [playlists, setPlaylists] = useState([]);

    useEffect(function() {
        axios.get(`https://api.spotify.com/v1/me/playlists`, {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(response => setPlaylists(response.data.items));

        if(props.id) {
            axios.get(`https://api.spotify.com/v1/playlists/${props.id}/tracks`, {
                headers: {
                    "Authorization": "Bearer " + token.access_token
                }
            })
            .then(response => setPlaylist(response.data));
        }
    }, [token, props.id, setPlaylist, setPlaylists])

    const isActive = ({ isCurrent }) => {
        return isCurrent ? { className: "slider--active" } : {}
    }

    console.log(playlist);

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
                            {playlists.map(function(result, index) {
                                return (
                                    <Link getProps={isActive} to={`/playlists/${result.id}`} key={result.id}>
                                        <img src={result.images[0].url} alt={result.name} data-index={index} onClick={(e) => document.querySelector(".slider-caption").innerText = playlists[e.target.getAttribute("data-index")].name}/>
                                    </Link>
                                );
                            })}
                            </div>
                            <h2 className="slider-caption">Select Playlist</h2>
                        </div>
                    </div>
                </div>
            </header>
            <section className="songs">
                {playlist.items && playlist.items.map(function(result) {
                    return (
                        (function() {
                            if (result.track !== null) {
                                return (
                                    <Song song={result.track?.name} artist={result.track?.artists[0].name} length={TimeCovert(result.track?.duration_ms)} id={result.track?.id} key={result.track?.id} />
                                );
                            }
                        }())
                    )
                })}
                
                <button className="songs__more">Listen All</button>
            </section>
            </main>
            <Menu playlists="#222" />
        </>
    )
}
