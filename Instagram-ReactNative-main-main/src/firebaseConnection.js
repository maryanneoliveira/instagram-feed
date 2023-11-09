import firebase from'firebase/compat/app';
import'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCBn10bn_cEOi7fhEh_XEe6ZyVP5PWjjzw",
    authDomain: "instagram-mary.firebaseapp.com",
    databaseURL: "https://instagram-mary-default-rtdb.firebaseio.com",
    projectId: "instagram-mary",
    storageBucket: "instagram-mary.appspot.com",
    messagingSenderId: "242675504166",
    appId: "1:242675504166:web:1c90e06e0753c3778b02e7"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  
  export default firebase;
  