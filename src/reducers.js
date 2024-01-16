import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const appReducer = (state = { isFrench: false }, action) => {
  switch (action.type) {
    case 'TOGGLE_LANGUAGE':
      console.log('ToggleLanguage');
      return { ...state, isFrench: !state.isFrench };
    case 'GO_TO_RED_PAGE':
      // dispatch(push('/red'));
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