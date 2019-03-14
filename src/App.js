import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageUpload from './ImageComponents/ImageUpload';

const styleTitle = {
  fontSize: '42px'
}
class App extends Component {
  
  render() {
    const containerImage = {
      height: '300px',
      width: '500px'
    }
    return (
      <div className="App">
        <header className="App-header">
          <div style={styleTitle}>
            <p>React Photo-Modifier</p>
          </div>
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          
          <div style={containerImage}>
            <ImageUpload />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
