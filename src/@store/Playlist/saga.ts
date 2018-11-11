import { all, takeLatest, put, call } from 'redux-saga/effects';
import { get } from 'lodash';

import { Details } from '@services/youtube';
import { getArtist } from '@utils/youtube';

import { DETAILS } from './actions';

function* fetchSongDetails(action) {
  try {
    yield put({ type: DETAILS.STARTED });

    const { data } = yield call(Details.list, action.ids);

    const details = data.items.map((song) => {
      const { artistName, title } = getArtist(song.snippet.title);

      return {
        artistName,
        duration: song.contentDetails.duration,
        id: song.id,
        playCount: song.statistics.viewCount,
        quality: song.contentDetails.definition,
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