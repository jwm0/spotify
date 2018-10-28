import { all } from 'redux-saga/effects';

// import sagas

export default function* rootSaga() {
  yield all([
    // fork(eventsSaga),
  ]);
}
