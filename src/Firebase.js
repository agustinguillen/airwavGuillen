
import firebase from 'firebase/app';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCbBaymSw64QUftVbmLyh-U73g84LsZ5mc",
    authDomain: "airwav-6913f.firebaseapp.com",
    projectId: "airwav-6913f",
    storageBucket: "airwav-6913f.appspot.com",
    messagingSenderId: "873136459538",
    appId: "1:873136459538:web:6b12a446055d8d3120adcb"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore()