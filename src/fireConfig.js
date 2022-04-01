import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

// we here are seeting the configuration of our firebase connection
const firebaseConfig = {
  apiKey: "AIzaSyDlqY-I3unk2YR2aFqigJhN-6HdrJmZelY",
  authDomain: "fashion-bf4c8.firebaseapp.com",
  projectId: "fashion-bf4c8",
  storageBucket: "fashion-bf4c8.appspot.com",
  messagingSenderId: "146725694957",
  appId: "1:146725694957:web:7fc894bd8affc6eb688be4"
};

  //initializing our app
  const app = initializeApp(firebaseConfig)
  
  //geting the auth object that give various auth functions from the app
  export const auth = getAuth(app)

  //getting the storage object that allows various functions for storing files on our firebase storage
  export const storage = getStorage(app)

  //this gives access to the firestore database 
  export const db = getFirestore()


  