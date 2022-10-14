import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middlewares = [thunk, logger];

const enhancer = compose(applyMiddleware(...middlewares));

const store = createStore(rootReducer, enhancer);

export default store;
