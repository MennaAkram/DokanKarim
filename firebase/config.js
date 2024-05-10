import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAZwWBMyyzeS7WG-34zIBQAXH7tMgG1q8k",
  authDomain: "dokankarim-5bd6b.firebaseapp.com",
  projectId: "dokankarim-5bd6b",
  storageBucket: "dokankarim-5bd6b.appspot.com",
  messagingSenderId: "438617056384",
  appId: "1:438617056384:web:04d500967a1fe42585b265",
  measurementId: "G-YFYTDT9PYT",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);