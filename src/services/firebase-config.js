import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const config = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  appId: process.env.GATSBY_FIREBASE_APP_ID,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
};

let app;
let auth;

export function getFirebase() {
  if (app) return app;
  app = initializeApp(config);
  return app;
}

export function getFirebaseAuth() {
  if (auth) return auth;
  auth = getAuth(getFirebase());
  return auth;
}
