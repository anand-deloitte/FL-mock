import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import {createBrowserHistory } from 'history'

const history = createBrowserHistory();

const appReducer = (state = { isFrench: false }, action) => {
  switch (action.type) {
    case 'TOGGLE_LANGUAGE':
      console.log('ToggleLanguage');
      return { ...state, isFrench: !state.isFrench };
    case 'GO_TO_RED_PAGE':
      history.push('contacts/1');
      // push('/contacts/1')
      return state;
    default:
      return state;
  }
};

const createRootReducer = () => combineReducers({
  app: appReducer,
  router: connectRouter(history),
});

export default createRootReducer;