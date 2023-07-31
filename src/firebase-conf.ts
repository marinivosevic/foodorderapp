import { initializeApp } from 'firebase/app';
import { getFirestore} from '@firebase/firestore';

const firebaseConfig = { 
    apiKey: "AIzaSyAZHkpv12N5j7rMsQjJiIu2elKBzYmewZQ",
    authDomain: "foodorderapp-ff028.firebaseapp.com",
    projectId: "foodorderapp-ff028",
    storageBucket: "foodorderapp-ff028.appspot.com",
    messagingSenderId: "679849391974",
    appId: "1:679849391974:web:1c3fad30e72f6b7d157aa7",
    measurementId: "G-JP3XNVVHG6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);