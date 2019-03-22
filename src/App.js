import React, { Component } from 'react';
import './App.css';
import ImageEditor from './ImageComponents/ImageEditor';

class App extends Component {
  render() {
    const styleTitle = {
      fontSize: '42px',
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
        <div>
            <ImageEditor />
        </div>
      </div>
    );
  }
}

export default App;
