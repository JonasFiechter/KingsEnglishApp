//  Here we store some variables and the config that we will need to make the API run.

import {initializeApp} from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

export const firebaseConfig = {
	apiKey: "AIzaSyB79F1ZoHzBrEw4t2IEVC_DQjh5AhitlUE",
	authDomain: "kingsenglishapp.firebaseapp.com",
	projectId: "kingsenglishapp",
	storageBucket: "kingsenglishapp.appspot.com",
	messagingSenderId: "464719863448",
	appId: "1:464719863448:web:955661b1fe2c889b747aed"
	};

export const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);