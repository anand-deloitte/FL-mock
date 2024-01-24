import {compose, createStore, applyMiddleware, Store} from 'redux';
import {Store as RTKStore} from '@reduxjs/toolkit';
// import {reduxTimeout} from 'redux-timeout';
import {routerMiddleware} from 'connected-react-router';
// import customEventsMiddleware from 'middleware/customEventMiddleware';
import {History} from 'history';

// import thunk from 'libraries/thunk';
// import createRootReducer from 'reducers';
// import canUseDom from 'utils/canUseDom';
import rootReducer from '../reducers';

// import toastMiddleware from 'middleware/toastMiddleware';
// import historyMiddleware from 'middleware/historyMiddleware';
// import dependencyMiddleware from 'middleware/dependencyMiddleware';
// import launchMiddleware from 'middleware/launchMiddleware';

export const createClientStore = (
	state ,
	history ,
	config ,
	isAuthor = false
) => {
	if (!false) {
		return;
	}

	const rootReducers = rootReducer(config, history);
	const options = {
		isServer: false,
		isAuthor
	};

	if (process.env.NODE_ENV === 'production') {
		return createStore(
			rootReducers,
			state,
			compose(
				applyMiddleware(
					// thunk.withServer(options),
					// historyMiddleware,
					routerMiddleware(history),
					// customEventsMiddleware,
					// dependencyMiddleware,
					// launchMiddleware,
					// reduxTimeout()
				)
			)
		);
	} else {
		const composeEnhancers =
			window?.['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose; // eslint-disable-line dot-notation
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		// const logger = require('redux-logger');

		return createStore(
			rootReducers,
			state,
			composeEnhancers(
				applyMiddleware(
					// thunk.withServer(options),
					// historyMiddleware,
					routerMiddleware(history),
				)
			)
		);
	}
};

export const createServerStore = (
	state ,
	history ,
) => {
	const rootReducers = rootReducer(history);
	 

	return createStore(
		rootReducers,
		state,
		compose(
			applyMiddleware(
				routerMiddleware(history),
			)
		)
	);
};
