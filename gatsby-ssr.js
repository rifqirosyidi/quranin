import React from "react";
import "./src/styles/global.css";
import "firebase/auth";
import { ListeningModeProvider } from "./src/context/ListeningModeContext";
import { SurahProvider } from "./src/context/SurahContext";
import { FirebaseAuthProvider } from "./src/context/FirebaseAuthContext";

export const wrapRootElement = ({ element }) => (
  <FirebaseAuthProvider>
    <SurahProvider>
      <ListeningModeProvider>{element}</ListeningModeProvider>
    </SurahProvider>
  </FirebaseAuthProvider>
);
