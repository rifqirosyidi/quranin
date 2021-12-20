import firebase from "gatsby-plugin-firebase";

export const auth = firebase.auth();

// Google Sign In
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

// Facebook Sign In
const facebokProvider = new firebase.auth.FacebookAuthProvider();
facebokProvider.setCustomParameters({ display: "popup" });
export const signInWithFacebook = () => auth.signInWithPopup(facebokProvider);
