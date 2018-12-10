import { all, takeLatest, put, call } from 'redux-saga/effects';
import { database } from '@services/firebase';
import { get, sortBy } from 'lodash';

import { Details } from '@services/youtube';
import { getArtist } from '@utils/youtube';

import { DETAILS, PLAYLIST } from './actions';

function* fetchSongDetails(action) {
  try {
    yield put({ type: DETAILS.STARTED });
    const { data } = yield call(Details.list, action.ids);

    const items = data.items.map((song) => {
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
      payload: { items },
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

function* fetchPlaylistById(action) {
  try {
    const snapshot = yield call(() => database.ref(`playlists/${action.id}`).once('value'));
    const { songs = {}, ...details } = snapshot.val();
    const items = sortBy(Object.keys(songs).map(id => ({
      id,
      timestamp: songs[id],
    })), 'timestamp').map((s) => s.id);

    yield put({
      details,
      type: PLAYLIST.PUT,
    });

    yield put({
      ids: items,
      type: DETAILS.REQUESTED,
    });
  } catch(e) {}
}

export default function* playlistSaga() {
  yield all([
    // TODO: fix type casting
    takeLatest(DETAILS.REQUESTED as any, fetchSongDetails),
    takeLatest(PLAYLIST.REQUEST as any, fetchPlaylistById),
  ]);
}