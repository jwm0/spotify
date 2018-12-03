import { all, takeLatest, put, call, select } from 'redux-saga/effects';
import { database } from '@services/firebase';

import { PLAYLIST } from './actions';

const getUserID = state => state.user.id;

function* createPlaylist(action) {
  try {
    const { data: { name, description, image } } = action;
    const uid = select(getUserID);
    const key = database.ref('playlists').push().key;
    const playlist = {
      authorId: uid,
      description,
      image,
      name,
      songs: [],
    };
    const metaPlaylist = {
      description,
      id: key,
      image,
      name,
    };

    let updates = {}
    updates[`/playlists/${key}`] = playlist;
    updates[`/users/${uid}/playlists/${key}`] = metaPlaylist;

    yield call(() => database.ref().update(updates));
    yield put({
      payload: { metaPlaylist },
      type: PLAYLIST.CREATE,
    });
  } catch (error) { console.log(error) }
}

function* addToPlaylist(action) {
  try {
    const { id } = action;
    const snapshot = yield database.ref(`playlists/${id}/songs/`).once('value');
    console.log(snapshot);
    // let updates = {}
    // updates[`/playlists/${key}`] = playlist;
    // updates[`/users/${uid}/playlists/${key}`] = metaPlaylist;

    // yield call(database.ref().update, updates);

    // TODO: display notification on success / error
    // yield put({
    //   payload: { metaPlaylist },
    //   type: PLAYLIST.CREATE,
    // });
  } catch (error) {}
}


export default function* userSaga() {
  yield all([
    // TODO: fix type casting
    takeLatest(PLAYLIST.REQUEST_CREATE as any, createPlaylist),
    takeLatest(PLAYLIST.REQUEST_ADD_TO as any, addToPlaylist),
  ]);
}
