import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import News from './NewsComponents/News';

const styleTitle = {
  fontSize: '42px'
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={styleTitle}>
            <p>React Photo-Modifier</p>
          </div>
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div>
            <News />
          </div>
          
          <div>
            ssss
          </div>
        </header>
      </div>
    );
  }
}

export default App;
