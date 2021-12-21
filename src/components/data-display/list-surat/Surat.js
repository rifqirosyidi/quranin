import { Link } from "gatsby";
import React from "react";

const Surat = ({ surat, ayat = 1 }) => {
  return (
    <Link to={`/surat/${surat.slug}/ayat/${ayat}`}>
      <div className="flex flex-col h-full p-4 bg-primary shadow-sm rounded-md dark:bg-gray-700  transition duration-1000 cursor-pointer hover:shadow-primary transform hover:-translate-y-2">
        <div className="flex flex-grow items-start justify-between">
          <p className="font-primary font-bold text-xs text-emerald-600 h-6 w-6 flex items-center justify-center rounded-md bg-emerald-200">
            {surat.number}
          </p>
          <div className="flex flex-col items-end">
            <p className="text-xs font-primary text-secondary uppercase">
              {surat.revelation.id}
            </p>
            <p className="text-xs font-primary text-emerald-400 mt-1">
              {surat.numberOfVerses} ayat
            </p>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-primary tracking-wide text-sm font-bold mt-2">
              {surat.name.transliteration.id}
            </h2>
            <p className="font-primary text-secondary text-xs">
              {surat.name.translation.id}
            </p>
          </div>
          <p className="font-arabic text-2xl">{surat.name.short}</p>
        </div>
      </div>
    </Link>
  );
};

export default Surat;
