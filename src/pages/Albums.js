// src/pages/Albums.js
import "./Albums.scss";
import Primarynav from "../components/Primarynav";
import { Link } from "@reach/router";
import Menu from "../components/Menu";
import AlbumReleases from "../components/AlbumReleases";
import AlbumImgCard from "../components/AlbumImgCard";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";

export default function Albums() {
	var [token] = useContext(TokenContext);

	// Get new releases
	var [content, setContent] = useState({});
	useEffect(
		function () {
			axios
				.get("https://api.spotify.com/v1/browse/new-releases", {
					headers: {
						Authorization: "Bearer " + token.access_token,
					},
				})
				.then(response => setContent(response.data));
		},
		[token, setContent]
	);

	// Get featured playlists
	var [playlists, setPlaylists] = useState({});
	useEffect(
		function () {
			axios
				.get("https://api.spotify.com/v1/browse/featured-playlists", {
					headers: {
						Authorization: "Bearer " + token.access_token,
					},
				})
				.then(response => setPlaylists(response.data));
		},
		[token, setPlaylists]
	);

	return (
		<>
			<Primarynav page="music" />
			<main className="albums">
				<h1 className="gradientHeading">All Albums</h1>
				<div className="albumSlider">
					<div className="albumSlider__header">
						<h2>Featured Albums</h2>
						<Link to="/">View All</Link>
					</div>
					<div className="albumSlider__albumImgCards">
						{playlists.playlists &&
							playlists.playlists.items.map(function (result) {
								return <AlbumImgCard img={result.images[0].url} id={result.id} key={result.id} />;
							})}
					</div>
				</div>
				<div className="albumReleases">
					<div className="albumReleases__header">
						<h2>New Releases</h2>
						<Link to="/">View All</Link>
					</div>
					<div className="albumReleases__cards">
						{content.albums &&
							content.albums.items.map(function (result) {
								return (
									<AlbumReleases
										img={result.images[0].url}
										album={result.name}
										artist={result.artists[0].name}
										amount={result.total_tracks === 1 ? `${result.total_tracks} song` : `${result.total_tracks} songs`}
										id={result.id}
										key={result.id}
									/>
								);
							})}
					</div>
				</div>
			</main>
			<Menu albums="#222" />
		</>
	);
}
