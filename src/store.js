import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import rootReducer from './reducers'; // Import your root reducer

const history = createBrowserHistory();

const store = createStore(
    rootReducer(history),
  applyMiddleware(connectRouter(history))
);

export default store;