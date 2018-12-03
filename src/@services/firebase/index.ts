import * as firebase from 'firebase';
import config from '@config/firebase';

firebase.initializeApp(config);

const database = firebase.database();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, facebookAuthProvider, googleAuthProvider, database };
