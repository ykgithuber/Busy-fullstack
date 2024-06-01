import React from 'react';
import Greeter from './Greeter'; //Import the Greeter component

function App() {
  return (
    <div>
      <h1>Welcome to My React App </h1>
      <Greeter />> {/* Use the Greeter component */}
    </div>
  );
}


export default App;


/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

*/