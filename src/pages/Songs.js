// src/pages/Songs.js
import "./Songs.scss";
import Primarynav from "../components/Primarynav";
import Song from "../components/Song";
import Menu from "../components/Menu";

export default function Songs() {
	return (
		<>
			<Primarynav page="Music" />
			<main className="albumSongs">
				<h1 className="gradientHeading">All Songs</h1>
				<Song song="Old Town Road" artist="Billy Ray Cyrus" length="3 : 58" />
				<Song song="don't call me up" artist="Mabel" length="2 : 46" />
				<Song song="let me down slowly" artist="Alec Benjamin" length="3 : 58" />
				<Song song="paradise" artist="Brazzi" length="2 : 32" />
				<Song song="sucker" artist="Jonas Brothers" length="1 : 55" />
				<Song song="kill this love" artist="BLACKPINK" length="2 : 43" />
			</main>
			<Menu albums="#222" />
		</>
	);
}
