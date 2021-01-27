// src/pages/Featured.js
import "./Featured.scss";
import Primarynav from "../components/Primarynav";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";
import Featuredcard from "../components/Featuredcard";
import Menu from "../components/Menu";

export default function Featured() {
    var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});

    useEffect(function() {
        axios.get("https://api.spotify.com/v1/browse/featured-playlists", {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(response => setContent(response.data));
    }, [token, setContent])

    console.log(content);

    return (
        <>
            <Primarynav page="featured"/>
            <main className="featured">
                <h1 className="gradientHeading">Featured</h1>
                <div className="featuredcards">
                    {content.playlists && content.playlists.items.map(function(result) {

                        return (
                            <Featuredcard img={result.images[0].url} heading={result.name} label={result.description.replace(/(<([^>]+)>)/ig, '')} id={result.id} key={result.id} />
                        );
                    })}
                </div>
            </main>
            <Menu featured="#222" />
        </>
    )
}
