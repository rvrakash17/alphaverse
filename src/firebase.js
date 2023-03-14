import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAm-Eg3Hoy8UqCk6-i-cupoJmAafZzP6j0",
  authDomain: "akash-c313e.firebaseapp.com",
  databaseURL: "https://akash-c313e.firebaseio.com",
  projectId: "akash-c313e",
  storageBucket: "akash-c313e.appspot.com",
  messagingSenderId: "9646355923",
  appId: "1:9646355923:web:959cdba11a651d28b42b26"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;