import { Link } from "gatsby";
import React from "react";
import Button from "../../general/button/Button";

const Box = ({ title, noData, lastChapter, lastVerse, lastSlug }) => {
  return (
    <div className="col-span-2 bg-primary rounded-xl p-6 shadow-none">
      <div className="flex items-center justify-between">
        {lastChapter && lastVerse ? (
          <>
            <div className="flex flex-col">
              <p className="font-primary font-bold">{title}</p>
              <p className="font-primary text-secondary">
                {lastChapter} - {lastVerse}
              </p>
            </div>
            <Link to={`/surat/${lastSlug}/ayat/${lastVerse}`}>
              <Button>lanjutkan</Button>
            </Link>
          </>
        ) : (
          <>
            <p className="font-primary font-bold">{title}</p>
            <p className="font-primary text-secondary">{noData}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Box;
