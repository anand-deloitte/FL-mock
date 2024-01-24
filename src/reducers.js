import { combineReducers } from 'redux'
const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case
   
  'INCREMENT':
        return state + 1;
      case
   
  'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  };
  
  // Combine reducers if you have multiple
  const rootReducer = combineReducers({
    counter: counterReducer,
    // Other reducers...
  });
  
  export default rootReducer;