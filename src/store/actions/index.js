import { put, call, takeEvery, all } from 'redux-saga/effects'

import { searchByQuery, getMovieById, getEpisodesByMovieId } from '../../services';
import { MOVIES_CONST, EPISODES_CONSTS } from '../constants';

const requestMovies = (data) => ({ type: MOVIES_CONST.REQUEST_MOVIES, data })
const setMovies = (data) => ({ type: MOVIES_CONST.SET_MOVIES, data })

const requestCurrentMovie = (data) => ({ type: MOVIES_CONST.REQUEST_CURRENT_MOVIE, data })
const setCurrentMovie = (data) => ({ type: MOVIES_CONST.SET_CURRENT_MOVIE, data })

const setEpisodes = (data) => ({ type: EPISODES_CONSTS.SET_EPISODES, data })
const setCurrentEpisode = (all, currentId) => {
  const result = all.find(ep => ep.id === Number(currentId))

  return { type: EPISODES_CONSTS.SET_CURRENT_EPISODE, data: result }
}

function* watchMoviesRequest() {
  yield takeEvery(MOVIES_CONST.REQUEST_MOVIES, fetchMoviesAsync);
}

function* watchCurrentMovieRequest() {
  yield takeEvery(MOVIES_CONST.REQUEST_CURRENT_MOVIE, fetchCurrentMovieAsync);
}

export function* fetchMoviesAsync(action) {
  const movies = yield call(() => {
    return searchByQuery(action.data);
  });

  yield put(setMovies(movies));
}

export function* fetchCurrentMovieAsync(action) {
  const movie = yield call(() => {
    return getMovieById(action.data);
  });
  const episodes = yield call(() => {
    return getEpisodesByMovieId(action.data)
  });

  yield put(setCurrentMovie(movie));
  yield put(setEpisodes(episodes))
}

export function* rootSaga() {
  yield all([
    call(watchMoviesRequest),
    call(watchCurrentMovieRequest)
  ]);
}

export const actions = {
  setMovies,
  setCurrentMovie,
  requestMovies,
  requestCurrentMovie,

  setCurrentEpisode
}
