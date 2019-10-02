import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCH6lU7r2MlHctU5PdFL6vtuTPLQIOTElc",
  authDomain: "chat-app-48394.firebaseapp.com",
  databaseURL: "https://chat-app-48394.firebaseio.com",
  projectId: "chat-app-48394",
  storageBucket: "chat-app-48394.appspot.com",
  messagingSenderId: "953020925952",
  appId: "1:953020925952:web:47c597aa046b502a65f0e5"
};
// Initialize Firebase
firebase.initializeApp(config);
const db = firebase.firestore();

export { db };
