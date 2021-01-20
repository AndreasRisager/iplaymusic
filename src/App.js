import './App.scss';
import Login from './pages/Login';
import { Router } from "@reach/router";
import Featured from './pages/Featured';
import Album from './pages/Album';

function App() {
  return (
    <div className="App">
      <Router>
        <Login path="login" />
        <Featured path="/" />
        <Album path="album" />
      </Router>
    </div>
  );
}

export default App;
