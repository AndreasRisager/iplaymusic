// src/pages/Album.js
import "./Album.scss";
import Primarynav from "../components/Primarynav";
import { Link } from "@reach/router";
import Song from "../components/Song";
import Menu from "../components/Menu";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";
import TimeCovert from "../TimeCovert";

export default function Album(props) {
    var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});

    useEffect(function() {
        axios.get(`https://api.spotify.com/v1/albums/${props.id}`, {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(response => setContent(response.data));
    }, [token, props.id, setContent])

    var songs = "Songs";
    if(content.total_tracks === 1) {
        songs = "Song";
    }
    
    return (
        <>
        <main className="album">
            <header className="albumHeader">
                <img src={content.images && content.images[0].url} alt=""/>
                <div className="fadedgradient"></div>
                <div className="albumHeader__content">
                    <Primarynav page={content.album_type} color="#FFF" search="false"/>
                    <div className="albumHeader__contentText">
                        <h1>{content.name}</h1>
                        <h2>{content.total_tracks + " " + songs}</h2>
                    </div>
                </div>
            </header>
            <section className="album__songs">
                <h3 className="album__songsHeader">All Songs</h3>
                <div className="songs">
                {content.tracks?.items.map(function(result) {
                    return (
                        <Song song={result.name} artist={result.artists[0].name} length={TimeCovert(result.duration_ms)} id={result.id} key={result.id} />
                    );
                })}
                </div>
            </section>
        </main>
        <Menu albums="#222" />
        </>
    )
}
