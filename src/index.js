import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import AppTsx from './AppTsx';

ReactDOM.render(
    <BrowserRouter> 
        <AppTsx />        
    </BrowserRouter>, document.getElementById('root'));
    
serviceWorker.unregister();