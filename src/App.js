import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageUpload from './ImageComponents/ImageUpload';

class App extends Component {
  render() {
    const styleTitle = {
      fontSize: '42px'
    }
    const containerImage = {
      backgroundColor: '#282c34',
      color: 'white',
      minHeight: '100vh'
    }
    const sizeImage = {
      height: '130px',
      width: '130px'
    }
    return (
      <div className="App">
        <header className="App-header">
          <div style={styleTitle}>
            <p>React Photo-Modifier</p>
          </div>
          <div>
            <img src={logo} style={sizeImage} className="App-logo" alt="logo" />
          </div>
        </header>
        <div style={containerImage} >
            <ImageUpload />
        </div>
      </div>
    );
  }
}

export default App;
