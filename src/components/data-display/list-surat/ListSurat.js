import React, { useContext } from "react";
import { SurahContext } from "../../../context/SurahContext";
import BoxSurat from "./BoxSurat";
import Surat from "./Surat";
import cls from "classnames";

const ListSurat = ({ listSurat }) => {
  const [mySurah] = useContext(SurahContext);

  return (
    <div
      className={cls("grid gap-x-5 gap-y-6", {
        "grid-cols-6": mySurah.viewPreference === "grid",
        "grid-cols-4": mySurah.viewPreference === "list",
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
