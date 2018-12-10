import { all, takeLatest, put, call, select } from 'redux-saga/effects';
import { firebase, facebookAuthProvider, googleAuthProvider, database, storage } from '@services/firebase';

import { PLAYLIST, USER, USER_PLAYLISTS } from './actions';

const getUser = state => state.user;
const getPlaylists = state => state.user.playlists;
const authProvider = {
  facebook: () => facebookAuthProvider,
  google: () => googleAuthProvider,
};

function* startLogin(action) {
  try {
    const provider = authProvider[action.provider]();
    const data = yield call(() => firebase.auth().signInWithPopup(provider));
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
    let imageUrl = '';
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
      public: false,
      songs: [],
    };
    const metaPlaylist = {
      description,
      id: key,
      image: imageUrl,
      name,
      public: false,
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
    const timestamp = new Date();
    let updates = {}
    updates[`/playlists/${playlistId}/songs/${songId}`] = timestamp;
    // updates[`/users/${uid}/playlists/${key}`] = metaPlaylist;

    yield call(() => database.ref().update(updates));

    // TODO: display notification on success / error
    // yield put({
    //   payload: songId,
    //   type: PLAYLIST.ADD_TO,
    // });
  } catch (error) {}
}

function* publishPlaylist(action) {
  try {
    const { playlistId, uid } = action;
    const snapshot = yield call(() => database.ref(`users/${uid}/playlists/${playlistId}`).once('value'));
    const metaPlaylist = snapshot.val();

    if (metaPlaylist) {
      let updates = {}
      updates[`/playlists/${playlistId}/public`] = true;
      updates[`/users/${uid}/playlists/${playlistId}/public`] = true;
      updates[`/public/playlists/${playlistId}`] = metaPlaylist;

      yield call(() => database.ref().update(updates));

      const playlists = yield select(getPlaylists);
      const newPlaylists = playlists.map((object) => {
        return object.id === playlistId ?
          {
            ...object,
            public: true,
          } :
          object;
      });

      yield put ({
        playlists: newPlaylists,
        type: PLAYLIST.PUBLISH,
      });
    }
  } catch(e) {}
}

function* unpublishPlaylist(action) {
  try {
    const { playlistId, uid } = action;
    const snapshot = yield call(() => database.ref(`/playlists/${playlistId}`).once('value'));
    const isPublic = snapshot.val().public;

    if (isPublic) {
      let updates = {}
      updates[`/playlists/${playlistId}/public`] = false;
      updates[`/users/${uid}/playlists/${playlistId}/public`] = false;
      updates[`/public/playlists/${playlistId}`] = null;

      yield call(() => database.ref().update(updates));

      const playlists = yield select(getPlaylists);
      const newPlaylists = playlists.map((object) => {
        return object.id === playlistId ?
          {
            ...object,
            public: false,
          } :
          object;
      });

      yield put ({
        playlists: newPlaylists,
        type: PLAYLIST.UNPUBLISH,
      });
    }
  } catch(e) {}
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
    takeLatest(PLAYLIST.REQUEST_PUBLISH as any, publishPlaylist),
    takeLatest(PLAYLIST.REQUEST_UNPUBLISH as any, unpublishPlaylist),
  ]);
}
