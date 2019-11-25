import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import testReducer from './test-reducer';

const reducers = combineReducers({
  testPage: testReducer,
});

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunkMiddleware)));

const isServer = typeof window === 'undefined';
if(!isServer){
	window.store = store;
}
export function initializeStore() {
  return store;
};
