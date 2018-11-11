import { all, fork } from 'redux-saga/effects';

import searchSaga from './Search/saga';
import playlistSaga from './Playlist/saga';


export default function* rootSaga() {
  yield all([
    fork(searchSaga),
    fork(playlistSaga),
  ]);
}
