import './App.css';
import Login from './pages/Login';
import { Router } from "@reach/router";
import Featured from './pages/Featured';

function App() {
  return (
    <div className="App">
      <Router>
        <Login path="login" />
        <Featured path="/" />
      </Router>
    </div>
  );
}

export default App;
