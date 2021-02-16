// src/components/Song.js
import "./Song.scss";
import { Link } from "@reach/router";

export default function Song({ song, artist, length, id }) {
	return (
		<article className="song">
			<Link to={"/player/" + id} className="song__playbutton">
				<i className="fas fa-play"></i>
			</Link>
			<div className="song__info">
				<h3 className="song__infoName">{song}</h3>
				<p className="song__infoArtist">{artist}</p>
			</div>
			<p className="song__length">{length}</p>
		</article>
	);
}
