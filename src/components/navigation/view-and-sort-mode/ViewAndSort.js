import React, { useContext } from "react";
import { SurahContext } from "../../../context/SurahContext";
import {
  FaGripLines,
  FaGripHorizontal,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import cls from "classnames";

const ViewAndSort = ({ listSurat, setListSurat }) => {
  const [mySurah, setMySurah] = useContext(SurahContext);

  const currentSort = mySurah.sortBy;
  const currentSortMode = mySurah.sortMode;

  const toggleSortSeries = () => {
    if (currentSort !== "seri") {
      setMySurah({
        ...mySurah,
        sortBy: "seri",
        sortMode: "asc",
      });

      const sortedSurat = listSurat;
      sortedSurat.sort((a, b) => (a.node.id > b.node.id ? 1 : -1));
      setListSurat(sortedSurat);
    } else {
      setMySurah({
        ...mySurah,
        sortBy: "seri",
        sortMode: currentSortMode === "asc" ? "desc" : "asc",
      });

      const sortedSurat = listSurat.reverse();
      setListSurat(sortedSurat);
    }
  };

  return (
    <div className="flex space-x-8 justify-between pb-8">
      <div className="flex space-x-4">
        <button
          onClick={() =>
            setMySurah({
              ...mySurah,
              viewPreference: "grid",
            })
          }
          className={cls(
            "px-6 py-4 flex flex-col items-start justify-between rounded-xl",
            { "bg-primary shadow-none": mySurah.viewPreference === "grid" }
          )}
        >
          <p className="font-secondary text-sm text-secondary">Tampilan</p>
          <FaGripHorizontal className="text-primary text-xl" />
        </button>
        <button
          onClick={() =>
            setMySurah({
              ...mySurah,
              viewPreference: "list",
            })
          }
          className={cls(
            "px-6 py-4 flex flex-col items-start justify-between rounded-xl",
            { "bg-primary shadow-none": mySurah.viewPreference === "list" }
          )}
        >
          <p className="font-secondary text-sm text-secondary">Tampilan</p>
          <FaGripLines className="text-primary text-xl" />
        </button>
      </div>
      <div className="flex space-x-5">
        <button
          onClick={toggleSortSeries}
          className={cls("px-6 py-4 rounded-xl w-40", {
            "bg-primary shadow-none": currentSort === "seri",
          })}
        >
          <div>
            <p className="font-secondary text-secondary text-sm text-left">
              Urutkan
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-primary">Surat</p>
            {currentSortMode === "asc" && currentSort === "seri" ? (
              <FaArrowUp className="text-sm" />
            ) : (
              <FaArrowDown className="text-sm" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default ViewAndSort;
