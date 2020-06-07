 import firebase from 'firebase';
 process.env.REACT_APP_GOOGLE_API_KEY
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: REACT_APP_API_KEY,
    authDomain: "react-movieselector.firebaseapp.com",
    databaseURL: "https://react-movieselector.firebaseio.com",
    projectId: "react-movieselector",
    storageBucket: "react-movieselector.appspot.com",
    messagingSenderId: "353160400871",
    appId: "1:353160400871:web:a6d7da5728327ef008b742"
  };
  // Initialize Firebase
  let db = firebase.initializeApp(firebaseConfig).firestore();

  export default db;