// src/pages/Login.js
import "./Login.scss";
import querystring from "querystring";

export default function Login() {
	var queryParameters = querystring.stringify({
		response_type: "code",
		client_id: "c153db9d84c8431887a6bb2ac07b25a1",
		scope: "user-read-private user-read-email",
		redirect_uri: process.env.NODE_ENV === "production" ? "https://iplaymusic-andreasrisager.netlify.app/callback" : "http://localhost:8888/callback",
		state: "shu398f3890ujasnd3shf3sf47892s998sfsjhb83xfn982df98sud63uasjnh3ehfisa7",
	});
	return (
		<main className="loginPage">
			<h1 className="loginPage__heading">Log In</h1>
			<a href={`https://accounts.spotify.com/authorize?${queryParameters}`}><i className="fab fa-spotify"></i>Log in with spotify</a>
		</main>
	);
}