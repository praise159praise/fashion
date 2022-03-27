import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlqY-I3unk2YR2aFqigJhN-6HdrJmZelY",
  authDomain: "fashion-bf4c8.firebaseapp.com",
  projectId: "fashion-bf4c8",
  storageBucket: "fashion-bf4c8.appspot.com",
  messagingSenderId: "146725694957",
  appId: "1:146725694957:web:7fc894bd8affc6eb688be4"
};

  const app = initializeApp(firebaseConfig)
  
  
  export const auth = getAuth(app)

  export const storage = getStorage(app)

  export const db = getFirestore()


  