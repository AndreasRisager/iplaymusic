// src/pages/Album.js
import "./Album.scss";
import Primarynav from "../components/Primarynav";
import { Link } from "@reach/router";
import Song from "../components/Song";
import Menu from "../components/Menu";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";

export default function Album(props) {
    var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});
    var album_id = new URLSearchParams(props.location.search).get("id");

    useEffect(function() {
        axios.get(`https://api.spotify.com/v1/albums/${album_id}/tracks`, {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(response => setContent(response.data));
    }, [token, album_id, setContent])

    return (
        <>
        <main className="album">
            <header className="albumHeader">
                <img src="./images/old-town-road.jpg" alt=""/>
                <div className="albumHeader__content">
                    <Primarynav page="album" color="#FFF" search="false"/>
                    <div className="albumHeader__contentText">
                        <div>
                            <h1>Old Town Road</h1>
                            <h2>12 Songs</h2>
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
                {content.items && content.items.map(function(result) {
                    return (
                        <Song song={result.name} artist={result.artists[0].name} length="3 : 58" key={result.id} />
                    );
                })}
                </div>
            </section>
        </main>
        <Menu albums="#222" />
        </>
    )
}
