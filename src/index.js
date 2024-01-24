import React from 'react';
import {hydrate} from 'react-dom';
import AppPage from './Shared/AppPage';
// import { BrowserRouter } from 'react-router-dom';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import store from './store'; // Import the Redux store

const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById('root'));

hydrate(
    <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppPage />
    </ConnectedRouter>
  </Provider>
,root);
