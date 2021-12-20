import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { auth } from "../services/firebase-config";

const FirebaseAuthContext = createContext();

export function useAuth() {
  return useContext(FirebaseAuthContext);
}

export function FirebaseAuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function login(email, password) {
    return auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => console.log(err));
  }

  function signOut() {
    return auth.signOut();
  }

  function signUp(name, email, password) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then(function ({ user }) {
        if (user && user.emailVerified === false) {
          user.sendEmailVerification().then(function () {
            console.log("email verification sent to user");
          });
        }
        user.updateProfile({ displayName: name });
      })
      .catch(function (err) {
        if (err.code === "auth/email-already-in-use") {
          console.log("EMAIL USED");
          toast.error("Email sudah terdaftar.");
        }
        if (err.code === "auth/auth/invalid-email") {
          toast.error("Email invalid");
        }
        if (err.code === "auth/auth/weak-password") {
          toast.error("Password anda lemah, min 6 karakter");
        }
      });
  }

  function getUser() {
    return auth.currentUser;
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    getUser,
    login,
    signOut,
    signUp,
  };

  return (
    <FirebaseAuthContext.Provider value={value}>
      {!loading && children}
    </FirebaseAuthContext.Provider>
  );
}
