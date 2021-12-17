import React from "react";
import Button from "../../general/button/Button";

const CardInfo = ({
  title,
  chapter,
  verse,
  icon = false,
  percentage = false,
  buttonLabel,
}) => {
  return (
    <div className="p-4 bg-primary rounded-md shadow-sm">
      <h2 className="font-primary font-bold text-secondary tracking-wide font-lg mb-2">
        {title}
      </h2>
      <div className="flex items-end justify-between">
        <div className="flex-1">
          <p className="font-secondary text-xs text-secondary">surat</p>
          <p className="font-secondary">{chapter}</p>

          <p className="font-secondary text-xs text-secondary mt-2">
            ayat dibaca
          </p>
          <p className="font-secondary">{verse}</p>
        </div>
        <div className="flex  flex-1 flex-col items-end space-y-6">
          {icon && icon}
          {percentage && percentage}
          <Button>{buttonLabel}</Button>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
