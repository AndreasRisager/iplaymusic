// src/pages/Player.js
import Primarynav from "../components/Primarynav";
import "./Player.scss";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";

export default function Player(props) {
    var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});
    var song_id = props.song

    useEffect(function() {
        axios.get(`https://api.spotify.com/v1/tracks/${song_id}`, {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(response => setContent(response.data));
    }, [token, song_id, setContent])

    var songLength = (content.duration_ms/1000) / 60;

    
    
    
    function playAudio() {
        var audio = document.querySelector("audio");
        var playBtn = document.querySelector(".player__play ion-icon");
        var record = document.querySelector(".record");

        if(!audio.src) {
            document.querySelector(".player__error").innerHTML = "There's no audio preview for this song.";
        }
        
        audio.volume = 0.01;

        if (audio.paused && audio.src) {
            audio.play();
            playBtn.name = "pause";
            record.classList.add("record--playing");
        } else {
            audio.pause();
            playBtn.name = "play-sharp";
            record.classList.remove("record--playing");
        }
    }

    return (
        <>
            <Primarynav page="playing" search="false" />
            <main className="player">
                
                <figure>
                    <img className="wave" src="../images/sound-wave.png" alt=""/>
                    <img className="record" src="../images/player.png" alt=""/>
                </figure>
                <h2>{content.name}</h2>
                <h3>{content.artists && content.artists[0].name}</h3>
                <form className="timer">
                    <input type="range"/>
                    <audio src={content.preview_url} type="audio/mp3"/>
                    <div className="timer__time">
                        <p>0:00</p>
                        <p>{songLength.toFixed(2)}</p>
                    </div>
                </form>
                <p className="player__error"></p>
                <div className="player__buttons">
                    <button><ion-icon name="play-skip-back-sharp"></ion-icon></button>
                    <button><ion-icon name="play-back-sharp"></ion-icon></button>
                    <button className="player__play" onClick={playAudio}><ion-icon name="play-sharp"></ion-icon></button>
                    <button><ion-icon name="play-forward-sharp"></ion-icon></button>
                    <button><ion-icon name="play-skip-forward-sharp"></ion-icon></button>
                </div>
            </main>
        </>
    )
}
