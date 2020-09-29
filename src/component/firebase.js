import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBDi5v05-EJ0nWQPHWK_7O-O6049WkvdI4",
    authDomain: "facebook-clone-fca53.firebaseapp.com",
    databaseURL: "https://facebook-clone-fca53.firebaseio.com",
    projectId: "facebook-clone-fca53",
    storageBucket: "facebook-clone-fca53.appspot.com",
    messagingSenderId: "776375840186",
    appId: "1:776375840186:web:a1c4363445e4f7282d8183",
    measurementId: "G-HHL69T8Q6L"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;