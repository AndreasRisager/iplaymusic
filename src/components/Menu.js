// src/components/Menu.js
import { Link } from "@reach/router";
import "./Menu.scss";

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
	document.documentElement.setAttribute('data-theme', currentTheme);
}
function switchTheme(theme) {
	if (theme) {
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
	}
	else {
		document.documentElement.removeAttribute('data-theme');
		localStorage.removeItem('theme');
	}
}

export default function Menu() {
	return (
		<nav className="Menu">
			<Link to="/albums">
				<ion-icon name="pulse"></ion-icon>
			</Link>
			<Link to="/playlists">
				<ion-icon name="mic"></ion-icon>
			</Link>
			<Link to="/featured" className="Menu__featured">
				<ion-icon name="radio"></ion-icon>
			</Link>
			<label className="theme-switch" htmlFor="theme">
				<input type="checkbox" id="theme" onChange={e => switchTheme(e.target.checked ? "dark" : "")} defaultChecked={currentTheme === "dark" ? true : false} />
				<ion-icon name="contrast"></ion-icon>
			</label>
			<Link to="/categories">
				<ion-icon name="albums"></ion-icon>
			</Link>
		</nav>
	);
}
