import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { navigate } from "gatsby";
import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import useFirebase from "../hooks/useFirebase";

const FirebaseContext = createContext();

export function useFirebaseContext() {
  return useContext(FirebaseContext);
}

export function FirebaseProvider({ children }) {
  const [app, auth] = useFirebase();
  const [currentUser, setCurrentUser] = useState();

  // Sign up
  const signUp = async (name, email, password) => {
    try {
      const registration = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
            toast.error("Email sudah terdaftar");
            break;
          case "auth/weak-password":
            toast.error("Password lemah, min 6 karakter");
            break;
          case "auth/invalid-email":
            toast.error("Email tidak valid");
            break;
        }
      });
      await sendEmailVerification(auth.currentUser).catch((err) =>
        console.log(err)
      );
      await updateProfile(auth.currentUser, { displayName: name }).catch(
        (err) => console.log(err)
      );
      if (registration) {
        navigate("/");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  function signOut() {
    return auth.signOut();
  }

  function getUser() {
    return auth?.currentUser;
  }

  useEffect(() => {
    if (!app) return;
    onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      if (currentUser) {
        // store the user on local storage
        localStorage.setItem("user", true);
      } else {
        // removes the user from local storage on logOut
        localStorage.removeItem("user");
      }
    });
  }, [app, auth]);

  const value = {
    currentUser,
    getUser,
    signOut,
    signUp,
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
}
