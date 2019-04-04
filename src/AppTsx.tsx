import React from 'react';
import ImageEditor from './ImageComponents/ImageEditor';
import './App.css';


const AppTsx: React.SFC = () => {
    return (
        <div className="App">
            <div>
                <ImageEditor />
            </div>
        </div>
    )
};

export default AppTsx;