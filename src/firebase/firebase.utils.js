import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBmAVPMgc-CyFKcdV1GVlNQJPf1hDTGpUQ',
	authDomain: 'crown-db-bc457.firebaseapp.com',
	databaseURL: 'https://crown-db-bc457.firebaseio.com',
	projectId: 'crown-db-bc457',
	storageBucket: '',
	messagingSenderId: '22826744112',
	appId: '1:22826744112:web:a1ab88a7907a56b3'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
