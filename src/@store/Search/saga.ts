import { all, takeLatest, put, call } from 'redux-saga/effects';

import { Search } from '@services/youtube';

import { SEARCH } from './actions';

function* fetchSearchData(action) {
  try {
    yield put({ type: SEARCH.STARTED, query: action.query });

    const { data } = yield call(Search.list, action.query, action.results, action.queryType);

    yield put({
      payload: { data },
      type: SEARCH.SUCCEED,
    });
  } catch (error) {
    yield put({
      payload: { error },
      type: SEARCH.FAILED,
    });
  }
  yield put({ type: SEARCH.FINISHED });
}

export default function* searchSaga() {
  yield all([
    // TODO: fix type casting
    takeLatest(SEARCH.REQUESTED as any, fetchSearchData),
  ]);
}