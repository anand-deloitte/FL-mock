import React from 'react';
import ReactDOM from 'react-dom';

import AppServer from './AppServer';
import "./index.css";


ReactDOM.hydrate(<AppServer />, document.getElementById('root'));
