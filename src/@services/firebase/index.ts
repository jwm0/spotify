import * as firebase from 'firebase';

import config from '@config/firebase';
import store from '@store/index';
import { startLogin, requestLogout } from '@store/User/actions';

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const information = {
      name: user.displayName,
      photo: user.photoURL,
      uid: user.uid,
    };
    store.dispatch(startLogin(information));
  } else {
    store.dispatch(requestLogout());
  }
});

const database = firebase.database();
const storage = firebase.storage();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, facebookAuthProvider, googleAuthProvider, database, storage };
