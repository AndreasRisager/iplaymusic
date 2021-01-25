// src/pages/Player.js
import Primarynav from "../components/Primarynav";
import "./Player.scss";

export default function Player() {
    return (
        <>
            <Primarynav page="playing" search="false" />
            <main className="player">
                <figure>
                    <img className="wave" src="./images/sound-wave.png" alt=""/>
                    <img className="record" src="./images/player.png" alt=""/>
                </figure>
                <h2>Don't Call Me Up</h2>
                <h3>Mabel</h3>
                <form className="timer">
                    <input type="range"/>
                    <div className="timer__time">
                        <p>0:00</p>
                        <p>3:40</p>
                    </div>
                </form>
                <div className="player__buttons">
                    <button><ion-icon name="play-skip-back-sharp"></ion-icon></button>
                    <button><ion-icon name="play-back-sharp"></ion-icon></button>
                    <button className="player__play"><ion-icon name="play-sharp"></ion-icon></button>
                    <button><ion-icon name="play-forward-sharp"></ion-icon></button>
                    <button><ion-icon name="play-skip-forward-sharp"></ion-icon></button>
                </div>
            </main>
        </>
    )
}
