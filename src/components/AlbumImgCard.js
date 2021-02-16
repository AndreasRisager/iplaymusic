// src/components/AlbumImgCard.js
import { Link } from "@reach/router";

export default function AlbumImgCard({ img, id }) {
	return (
		<Link to={`/playlists/${id}`}>
			<img src={img} alt="" />
		</Link>
	);
}
