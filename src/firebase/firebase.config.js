import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9Q446AVFblDQbKmCqVVwEgbbDoPmFRkk",
  authDomain: "fir-authentication-syste-d8b3e.firebaseapp.com",
  projectId:  "fir-authentication-syste-d8b3e",
  appId:"1:26356725398:web:8ed13eea2a14ff4bb374b7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);