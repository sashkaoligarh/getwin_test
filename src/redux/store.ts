import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middlewares: any = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}
const enhancer = compose(applyMiddleware(...middlewares));

const store = createStore(rootReducer, enhancer);

export default store;
export type RootState = ReturnType<typeof store.getState>;
