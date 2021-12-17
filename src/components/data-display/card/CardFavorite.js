import React from "react";

const CardFavorite = () => {
  return (
    <div className="bg-primary rounded-md p-4 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="font-primary font-bold text-sm">Al-Fatihah</h2>
          <p className="font-secondary text-secondary text-sm">Pembukaan</p>
        </div>
        <p className="font-secondary text-sm text-green-400">ayat 7</p>
      </div>
      <p className="font-arabic text-right text-sm mt-4">
        ... صِرَاطَ الَّذِينَ أَنْعَمْتَ
      </p>
      <p className="font-secondary text-secondary text-sm mt-2">
        (yaitu) jalan orang-orang ...
      </p>
    </div>
  );
};

export default CardFavorite;
