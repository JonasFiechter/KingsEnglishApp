import {initializeApp} from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

export const firebaseConfig = {
	apiKey: "AIzaSyBmKwzXIQ_7iufDh4U6GyU_4Wc-hyDEnf8",
	authDomain: "mealstogo-b2612.firebaseapp.com",
	projectId: "mealstogo-b2612",
	storageBucket: "mealstogo-b2612.appspot.com",
	messagingSenderId: "158582890553",
	appId: "1:158582890553:web:2ef50439fcd80f2ede2de8",
	};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});