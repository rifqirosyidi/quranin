import React, { useContext } from "react";
import { SurahContext } from "../../../context/SurahContext";
import BoxSurat from "./BoxSurat";
import Surat from "./Surat";
import cls from "classnames";

const ListSurat = ({ listSurat }) => {
  const [mySurah] = useContext(SurahContext);

  return (
    <div
      className={cls("grid gap-4 md:gap-x-5 md:gap-y-6", {
        "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6":
          mySurah.viewPreference === "grid",
        "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4":
          mySurah.viewPreference === "list",
      })}
    >
      {mySurah.viewPreference === "grid" &&
        listSurat.map((chapter) => (
          <BoxSurat key={chapter.node.id} surat={chapter.node} />
        ))}
      {mySurah.viewPreference === "list" &&
        listSurat.map((chapter) => (
          <Surat key={chapter.node.id} surat={chapter.node} />
        ))}
    </div>
  );
};

export default ListSurat;
