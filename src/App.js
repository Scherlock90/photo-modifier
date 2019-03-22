import React, { Component } from 'react';
import './App.css';
import ImageEditor from './ImageComponents/ImageEditor';

class App extends Component {
  render() {
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
