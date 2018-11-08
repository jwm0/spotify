import { all, fork } from 'redux-saga/effects';

import searchSaga from './Search/saga';

export default function* rootSaga() {
  yield all([
    fork(searchSaga),
  ]);
}
