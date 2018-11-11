import { all, takeLatest, put, call } from 'redux-saga/effects';
import { get } from 'lodash';

import { getArtist } from '@utils/youtube';

import { DETAILS } from './actions';

function* fetchSongDetails(action) {
  try {
    yield put({ type: DETAILS.STARTED });

    const { data: songData } = yield call();

    const details = songData.items.map((song) => {
      const { artistName, title } = getArtist(song.snippet.title);

      return {
        artistName,
        id: song.id.videoId,
        thumbnail: get(song.snippet, 'thumbnails.default', {}),
        title,
      };
    });

    yield put({
      payload: { details },
      type: DETAILS.SUCCEED,
    });
  } catch (error) {
    yield put({
      payload: { error },
      type: DETAILS.FAILED,
    });
  }
  yield put({ type: DETAILS.FINISHED });
}

export default function* playlistSaga() {
  yield all([
    // TODO: fix type casting
    takeLatest(DETAILS.REQUESTED as any, fetchSongDetails),
  ]);
}