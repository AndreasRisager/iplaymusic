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
//import * as Sentry from "@sentry/react";

export default function Playlists(props) {
	var [token] = useContext(TokenContext);
	var [playlist, setPlaylist] = useState({});
	var [playlists, setPlaylists] = useState([]);

	useEffect(
		function () {
			axios
				.get(`https://api.spotify.com/v1/me/playlists`, {
					headers: {
						Authorization: "Bearer " + token.access_token,
					},
				})
				.then(response => setPlaylists(response.data.items));

			if (props.id) {
				axios
					.get(`https://api.spotify.com/v1/playlists/${props.id}/tracks`, {
						headers: {
							Authorization: "Bearer " + token.access_token,
						},
					})
					.then(response => setPlaylist(response.data));
			}
		},
		[token, props.id, setPlaylist, setPlaylists]
	);

	const isActive = ({ isCurrent }) => {
		return isCurrent ? { className: "slider--active" } : {};
	};

	if (document.querySelector(".slider--active")) {
		document.querySelector(".slider-caption").innerText = document
			.querySelector(".slider--active img")
			.getAttribute("alt");
	}

	return (
		<>
			<main className="playlists">
				<header className="playlistsHeader">
					<img src="../images/slimey.png" alt="" />
					<div className="playlistsHeader__content">
						<Primarynav page="playlists" color="#FFF" />
						<div className="playlistsHeader__contentSlider">
							<h1>Playlists</h1>
							<div className="slider-container">
								<div className="slider-images">
									{playlists.map(function (result) {
										return (
											<Link getProps={isActive} to={`/playlists/${result.id}`} key={result.id}>
												<img src={result.images[0].url} alt={result.name} />
											</Link>
										);
									})}
								</div>
								<h2 className="slider-caption">Select Playlist</h2>
							</div>
						</div>
					</div>
				</header>
				{/* <Sentry.ErrorBoundary message="The playlist can't be generated right now, try again later."> */}
					<section className="songs">
						{playlist.items &&
							playlist.items.map(function (result) {
								return (function () {
									if (result.track !== null) {
										return (
											<Song
												song={result.track?.name}
												artist={result.track?.artists[0].name}
												length={TimeCovert(result.track?.duration_ms)}
												id={result.track?.id}
												key={result.track?.id}
											/>
										);
									}
								})();
							})}

						<button className="songs__more">Listen All</button>
					</section>
				{/* </Sentry.ErrorBoundary> */}
			</main>
			<Menu />
		</>
	);
}
