import React from 'react';
import Card from './component/card';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{
        background: 'url(https://source.unsplash.com/random/1600x900) no-repeat center center fixed',
        backgroundSize: 'cover'
      }}
      >
        <Card />
      </header>
    </div>
  );
}

export default App;
