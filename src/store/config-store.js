import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime/runtime';

import { composeWithDevTools } from 'redux-devtools-extension';

import { moviesReduce, episodesReduce } from './reducer';
import { rootSaga } from './actions';

const reducers = combineReducers({
  movies: moviesReduce,
  episodes: episodesReduce
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);