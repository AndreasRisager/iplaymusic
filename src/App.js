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

function App() {
  return (
    <div className="App">
      <Router>
        <Login path="login" />
        <Featured path="/" />
        <Album path="album" />
        <Player path="player" />
        <Playlists path="playlists" />
        <Albums path="albums" />
        <Categories path="categories" />
        <Songs path="songs" />
      </Router>
    </div>
  );
}

export default App;
