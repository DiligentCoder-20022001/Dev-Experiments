import firebase from "firebase";
import "firebase/auth";

var app = firebase.initializeApp({
    apiKey: "AIzaSyCT0N1ZL3fglufR9VM6q7SjeG6PvjV2FeU",
  authDomain: "leet-us-code.firebaseapp.com",
  projectId: "leet-us-code",
  storageBucket: "leet-us-code.appspot.com",
  messagingSenderId: "939176000868",
  appId: "1:939176000868:web:b9321725b2db5caf2cce71",
  measurementId: "G-8W21P5FGFD"
});

export const auth = app.auth();
auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
export default app;
export const db = app.firestore();