import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZwWBMyyzeS7WG-34zIBQAXH7tMgG1q8k",
  authDomain: "dokankarim-5bd6b.firebaseapp.com",
  projectId: "dokankarim-5bd6b",
  storageBucket: "dokankarim-5bd6b.appspot.com",
  messagingSenderId: "438617056384",
  appId: "1:438617056384:web:04d500967a1fe42585b265",
  measurementId: "G-YFYTDT9PYT"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export {firebase}

