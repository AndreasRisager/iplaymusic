import './App.scss';
import Login from './pages/Login';
import { Router } from "@reach/router";
import Featured from './pages/Featured';
import Album from './pages/Album';
import Player from './pages/Player';
import Playlists from './pages/Playlists';
import Albums from './pages/Albums';
import Categories from './pages/Categories';
import Songs from './pages/Songs';
import Callback from './pages/Callback';
import TokenContext from "./TokenContext";
import { useState } from 'react';

function App() {
  var tokenState = useState(null);
  return (
    <TokenContext.Provider value={tokenState}>
    <div className="App">
      <Router>
        <Login default />
        <Callback path="/callback" />
        <Featured path="/featured" />
        <Album path="/album" />
        <Player path="/player" />
        <Playlists path="/playlists" />
        <Albums path="/albums" />
        <Categories path="/categories" />
        <Songs path="/songs" />
      </Router>
    </div>
    </TokenContext.Provider>
  );
}

export default App;
