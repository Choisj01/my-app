import logo from './logo.svg';
import './App.css';

let isrc = 'https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/131119536_4084267281677310_5726527909193953913_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=9RIk9wZkcmkAX-sYGb3&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBd1kxqRseE1c_5YX3RdDrk63AipRo7v81Putv0UwzE-w&oe=657251A9';

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
          춘식이도 React~!
        </a>
      </header>
    </div>
  );
}

export default App;
