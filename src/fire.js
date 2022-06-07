import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
 
  const firebaseConfig = {
    apiKey: "AIzaSyAROgWI_XVH0WJThikI4aOMEX1zMgnZ-h4",
    authDomain: "fasall.firebaseapp.com",
    projectId: "fasall",
    storageBucket: "fasall.appspot.com",
    messagingSenderId: "695565232590",
    appId: "1:695565232590:web:f90ca5d7f26692e33e239f",
    measurementId: "G-17WDS2NMKB"
  };

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);


export default firebase;