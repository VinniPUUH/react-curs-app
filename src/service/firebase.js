import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAfhb74Q0rVSUGe-qaG1M1unFYBaqTAQiU",
  authDomain: "pokemon-game-598dd.firebaseapp.com",
  databaseURL: "https://pokemon-game-598dd-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-598dd",
  storageBucket: "pokemon-game-598dd.appspot.com",
  messagingSenderId: "802679724717",
  appId: "1:802679724717:web:9719267c690e0efc968424",
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;
