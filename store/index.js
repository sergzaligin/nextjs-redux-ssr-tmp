import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers';

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunkMiddleware)));

const isServer = typeof window === 'undefined';
if(!isServer){
	window.store = store;
}

export function initializeStore() {
  return store;
};