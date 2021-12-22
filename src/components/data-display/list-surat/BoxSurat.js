import { Link } from "gatsby";
import React from "react";

const BoxSurat = ({ surat, ayat = 1 }) => {
  return (
    <Link to={`/surat/${surat.slug}/ayat/${ayat}`}>
      <div className="flex flex-col h-full p-4 bg-primary shadow-none rounded-xl dark:bg-gray-700  transition duration-1000 cursor-pointer hover:shadow-primary transform hover:-translate-y-2">
        <div className="flex flex-grow items-start justify-between">
          <p className="font-primary text-xs text-emerald-600 h-6 w-6 flex items-center justify-center rounded-xl bg-emerald-200">
            {surat.number}
          </p>
          <div className="flex flex-col items-end">
            <p className="text-xs font-primary text-secondary">
              {surat.revelation.id}
            </p>
          </div>
        </div>
        <div className="flex items-end justify-between mt-2">
          <div>
            <h2 className="font-primary tracking-wide text-sm font-bold mt-2">
              {surat.name.transliteration.id}
            </h2>
            <p className="text-xs font-primary text-emerald-400 mt-1">
              {surat.numberOfVerses} ayat
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BoxSurat;
