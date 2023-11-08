import logo from './logo.svg';
import './App.css';

let isrc = 'https://i.gifer.com/origin/d0/d04b572a7c25987781f4a1080347be64_w200.webp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={isrc} style={{borderRadius:'50%'}} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          스티치도 React~~
        </a>
      </header>
    </div>
  );
}

export default App;
