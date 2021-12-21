import React from "react";
import "./src/styles/global.css";
import { ListeningModeProvider } from "./src/context/ListeningModeContext";
import { SurahProvider } from "./src/context/SurahContext";
import { FirebaseProvider } from "./src/context/FirebaseContext";

export const wrapRootElement = ({ element }) => (
  <FirebaseProvider>
    <SurahProvider>
      <ListeningModeProvider>{element}</ListeningModeProvider>
    </SurahProvider>
  </FirebaseProvider>
);
