import React from "react";
import "./src/styles/global.css";
import "firebase/auth";
import { ListeningModeProvider } from "./src/context/ListeningModeContext";
import { SurahProvider } from "./src/context/SurahContext";

export const wrapRootElement = ({ element }) => (
  <SurahProvider>
    <ListeningModeProvider>{element}</ListeningModeProvider>
  </SurahProvider>
);
