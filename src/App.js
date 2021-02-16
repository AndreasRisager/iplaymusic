import "./App.scss";
import Login from "./pages/Login";
import { Router } from "@reach/router";
import Featured from "./pages/Featured";
import Album from "./pages/Album";
import Player from "./pages/Player";
import Playlists from "./pages/Playlists";
import Albums from "./pages/Albums";
import Categories from "./pages/Categories";
import Songs from "./pages/Songs";
import Callback from "./pages/Callback";
import TokenContext from "./TokenContext";
import { useState } from "react";

function App() {
	var tokenState = useState(null);
	return (
		<TokenContext.Provider value={tokenState}>
			<div className="App">
				<Router>
					{(function () {
						if (tokenState[0]?.access_token) {
							return (
								<>
									<Featured path="/featured" />
									<Album path="/album" />
									<Album path="/album/:id" />
									<Player path="/player" />
									<Player path="/player/:song" />
									<Playlists path="/playlists" />
									<Playlists path="/playlists/:id" />
									<Albums path="/albums" />
									<Categories path="/categories" />
									<Categories path="/categories/:id" />
									<Songs path="/songs" />
								</>
							);
						}
					})()}
					<Login default />
					<Callback path="/callback" />
				</Router>
			</div>
		</TokenContext.Provider>
	);
}

export default App;
