import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const appReducer = (state = { isFrench: false }, action) => {
  switch (action.type) {
    case 'TOGGLE_LANGUAGE':
      return { ...state, isFrench: !state.isFrench };
    case 'GO_TO_RED_PAGE':
      console.log('reaching here');
      return state;
    default:
      return state;
  }
};

const createRootReducer = (history) => combineReducers({
  app: appReducer,
  router: connectRouter(history),
});

export default createRootReducer;