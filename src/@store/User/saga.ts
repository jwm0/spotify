import { all, takeLatest, put, call, select } from 'redux-saga/effects';
import { firebase, facebookAuthProvider, googleAuthProvider, database } from '@services/firebase';

import { PLAYLIST, USER } from './actions';

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

    yield put ({
      payload: information,
      type: USER.LOGIN,
    })
  } catch(e) {}
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
    const playlist = {
      authorId: uid,
      authorName,
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
    takeLatest(USER.REQUEST_LOGOUT as any, startLogout),
  ]);
}
