import { Line } from "rc-progress";
import React, { useContext } from "react";
import { FaBookReader, FaChevronRight, FaHeadphonesAlt } from "react-icons/fa";
import { SurahContext } from "../../../context/SurahContext";
import CardInfo from "../../data-display/card/CardInfo";
import Button from "../../general/button/Button";

const RightNav = () => {
  const [mySurah] = useContext(SurahContext);

  console.log("SURAH STATE", mySurah);
  return (
    <div className="fixed top-24 right-0 w-60 mr-4 min-h-screen space-y-5">
      <div className="p-4 bg-primary rounded-md shadow-sm">
        <h2 className="font-primary font-bold text-secondary tracking-wide font-lg mb-2">
          Khatamul Quran
        </h2>
        <div className="flex items-end justify-between">
          <div className="flex-1">
            <p className="font-secondary text-xs text-secondary">surat</p>
            <p className="font-secondary">Al Baqarah</p>

            <p className="font-secondary text-xs text-secondary mt-2">
              ayat dibaca
            </p>
            <p className="font-secondary">102</p>
          </div>
          <div className="flex  flex-1 flex-col items-end space-y-2">
            <p className="font-secondary text-secondary text-sm">3%</p>
            <div className="pb-2">
              <Line
                percent="3"
                strokeWidth="2"
                strokeColor="#047857"
                trailColor="#6ee7b7"
              />
            </div>
            <Button>
              <FaChevronRight />
            </Button>
          </div>
        </div>
      </div>

      <CardInfo
        title="Terakhir dibaca"
        chapter={mySurah.lastReadChapter || ""}
        verse={mySurah.lastReadVerse || ""}
        buttonLabel={<FaChevronRight />}
        icon={<FaBookReader className="text-secondary" />}
      />

      <CardInfo
        title="Terakhir didengar"
        chapter={mySurah.lastListenChapter || ""}
        verse={mySurah.lastListenVerse || ""}
        buttonLabel={<FaChevronRight />}
        icon={<FaHeadphonesAlt className="text-secondary" />}
      />
    </div>
  );
};

export default RightNav;
