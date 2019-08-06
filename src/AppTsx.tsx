import React from 'react';
import ImageEditor from './components/ImageEditor';
import './styles/main.css';


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