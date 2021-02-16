// src/pages/Login.js
import "./Login.scss";
import { Link } from "@reach/router";
import querystring from "querystring";

export default function Login() {
	var queryParameters = querystring.stringify({
		response_type: "code",
		client_id: "c153db9d84c8431887a6bb2ac07b25a1",
		scope: "user-read-private user-read-email",
		redirect_uri: "http://localhost:8888/callback",
		state: "shu398f3890ujasnd3shf3sf47892s998sfsjhb83xfn982df98sud63uasjnh3ehfisa7",
	});
	return (
		<main className="loginPage">
			<h1 className="loginPage__heading">Log In</h1>
			<article>
				<a href={`https://accounts.spotify.com/authorize?${queryParameters}`}>Log in with spotify</a>
				<form className="loginPage__form">
					<label htmlFor="username">Username</label>
					<input type="text" id="username" name="username" placeholder="Enter your username" />
					<label htmlFor="password">Password</label>
					<input type="password" id="password" name="password" placeholder="Enter your password" />
					<Link to="/" type="submit">
						Log in
					</Link>
				</form>
				<div className="loginPage__touch">
					<button className="loginPage__touchBtn">
						<img src="../images/finger-print.png" alt="finger print" />
					</button>
					<p>One-Touch Login</p>
				</div>
			</article>
		</main>
	);
}
