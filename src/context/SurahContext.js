import React, { createContext } from "react";
import { useSafeLocalStorage } from "../hooks/useSafeLocalStorage";

export const SurahContext = createContext();

export const SurahProvider = ({ children }) => {
  const values = {
    lastReadSlug: "",
    lastListenSlug: "",
    lastReadChapter: "",
    lastReadVerse: "",
    lastListenChapter: "",
    lastListenVerse: "",
    sortBy: "seri",
    sortMode: "asc",
    viewPreference: "list",
  };

  const [mySurah, setMySurah] = useSafeLocalStorage("mySurah", values);

  return (
    <SurahContext.Provider value={[mySurah, setMySurah]}>
      {children}
    </SurahContext.Provider>
  );
};
