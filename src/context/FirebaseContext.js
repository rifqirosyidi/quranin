import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
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
  const { app, auth } = useFirebase();
  const [currentUser, setCurrentUser] = useState();

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
          default:
            toast.error("Internal Error");
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

  const signIn = async (email, password) => {
    try {
      const login = await signInWithEmailAndPassword(
        auth,
        email,
        password
      ).catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
            toast.error("Email invalid.");
            break;
          case "auth/user-disabled":
            toast.error("User dengan akun ini telah dinonaktifkan.");
            break;
          case "auth/user-not-found":
            toast.error("User dengan email ini tidak ditemukan.");
            break;
          case "auth/wrong-password":
            toast.error("Password salah.");
            break;
          default:
            toast.error("Internal Error");
            break;
        }
      });

      if (login) {
        navigate("/");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const signInWithGoogle = () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      signInWithPopup(auth, provider)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error.code);
        });
    } catch (err) {
      console.log(err);
    }
  };

  //   Sign In With Fb

  // Login With Email

  function signOut() {
    return auth.signOut().then(() => {
      setCurrentUser(null);
      navigate("/");
    });
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
        if (typeof window !== "undefined") {
          localStorage.setItem("user", true);
        }
      } else {
        // removes the user from local storage on logOut
        if (typeof window !== "undefined") {
          localStorage.removeItem("user");
        }
      }
    });
  }, [app, auth]);

  const value = {
    currentUser,
    signUp,
    signIn,
    signInWithGoogle,
    getUser,
    signOut,
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
}
