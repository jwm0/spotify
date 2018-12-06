import { all, takeLatest, put, call, select } from 'redux-saga/effects';
import { firebase, facebookAuthProvider, googleAuthProvider, database, storage } from '@services/firebase';

import { PLAYLIST, USER, USER_PLAYLISTS } from './actions';

const getUser = state => state.user;
const authProvider = {
  'facebook': facebookAuthProvider,
  'google': googleAuthProvider,
};

function* startLogin(action) {
  try {
    const data = yield call(() => firebase.auth().signInWithPopup(authProvider[action.provider]));
    const information = {
      name: data.user.displayName,
      photo: data.user.photoURL,
      playlists: [],
      uid: data.user.uid,
    };

    // INFO: Check if new user
    yield data.additionalUserInfo.isNewUser && call(() => database
      .ref(`users/${information.uid}`)
      .update({ name: information.name, photo: information.photo }));

    yield put({
      information,
      type: USER.START_LOGIN,
    });
  } catch(e) {}
}

function* getUserPlaylists(action) {
  try {
    const snapshot = yield call(() => database.ref(`users/${action.id}/playlists`).once('value'));
    const playlists = snapshot.val() || {};
    const items = Object.keys(playlists).map(key => playlists[key]);

    yield put ({
      playlists: items,
      type: USER_PLAYLISTS.SUCCEED,
    })
  } catch(e) {}
}

function* login(action) {
  const { information } = action;

  yield put({
    payload: information,
    type: USER.LOGIN,
  });

  yield put({
    id: information.uid,
    type: USER_PLAYLISTS.REQUESTED,
  });
}

function* startLogout(action) {
  try {
    yield call(() => firebase.auth().signOut());

    yield put ({
      type: USER.LOGOUT,
    })
  } catch(e) {}
}

function* createPlaylist(action) {
  try {
    const { data: { name, description, image } } = action;
    const { uid, name: authorName } = yield select(getUser);
    const key = database.ref('playlists').push().key;
    let imageUrl;
    if (image) {
      const snapshot = yield call(() => storage.ref(`playlists/${key}`).put(image));
      imageUrl = yield call(() => snapshot.ref.getDownloadURL());
    }

    const playlist = {
      authorId: uid,
      authorName,
      description,
      image: imageUrl,
      name,
      songs: [],
    };
    const metaPlaylist = {
      description,
      id: key,
      image: imageUrl,
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
    const { playlistId, songId } = action;
    console.log(playlistId, songId);
    const key = database.ref(`playlists/${playlistId}/songs`).push().key;
    let updates = {}
    updates[`/playlists/${playlistId}/songs/${key}`] = songId;
    // updates[`/users/${uid}/playlists/${key}`] = metaPlaylist;

    yield call(() => database.ref().update(updates));

    // TODO: display notification on success / error
    // yield put({
    //   payload: songId,
    //   type: PLAYLIST.ADD_TO,
    // });
  } catch (error) {}
}


export default function* userSaga() {
  yield all([
    // TODO: fix type casting
    takeLatest(PLAYLIST.REQUEST_CREATE as any, createPlaylist),
    takeLatest(PLAYLIST.REQUEST_ADD_TO as any, addToPlaylist),
    takeLatest(USER.REQUEST_LOGIN as any, startLogin),
    takeLatest(USER.START_LOGIN as any, login),
    takeLatest(USER.REQUEST_LOGOUT as any, startLogout),
    takeLatest(USER_PLAYLISTS.REQUESTED as any, getUserPlaylists),
  ]);
}
