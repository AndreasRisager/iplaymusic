import './App.scss';
import Login from './pages/Login';
import { Router } from "@reach/router";
import Featured from './pages/Featured';
import Album from './pages/Album';
import Player from './pages/Player';
import Playlists from './pages/Playlists';

function App() {
  return (
    <div className="App">
      <Router>
        <Login path="login" />
        <Featured path="/" />
        <Album path="album" />
        <Player path="player" />
        <Playlists path="playlists" />
      </Router>
    </div>
  );
}

export default App;
